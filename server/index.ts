import path from 'path';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose, { ConnectOptions, Error } from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// import passport and session
import session from 'express-session';
import passport from 'passport';

// import Routers
import authRouter from './routes/authRoute';
import appointmentRouter from './routes/appointments';
import dashboardRouter from './routes/getDashboardStats';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.COOKIE_SECRET;
const session_secret = process.env.SESSION_SECRET;

// Register middlewares on the app instance
app.use(cookieParser(secret));

// app.use(
//   cors({
//     origin: 'https://doc-medikall.onrender.com',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware on the app instance
// app.use(
//   session({
//     secret: session_secret!,
//     saveUninitialized: true,
//     resave: false,
//     cookie: { maxAge: 6000 * 7000 * 2, secure: true, sameSite: 'none' }, //almost 24 hours
//   })
// );
app.use(
  session({
    secret: session_secret!,
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 6000 * 7000 * 2,
      secure: false, // set to false because your site is not served over HTTPS
      sameSite: 'lax', // set to 'lax' or 'strict' because secure is false
    },
  })
);

// Initialize passport on the app
app.use(passport.initialize());
app.use(passport.session());

// Connect to DB
async function connectDB() {
  // Mongoose Client Options
  const clientOptions: ConnectOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
  };

  try {
    await mongoose.connect(process.env.MONGO_URI!, clientOptions);
    console.log('Connected to DB!');

    // Only Start Listening after successful connection to DB
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Catch possible Errors
  } catch (error) {
    console.log('There was an error:\n', error);
    process.exit();
  }
}

/////////////////////////////////
// Connect the Database and Start The Server on Success
connectDB();
/////////////////////////////////

// Define Routes on the app instance
app.get('/health', (req: Request, res: Response) => {
  res.send('Yuuup! Server still up and running 😄');
});

app.use('/api/auth', authRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/dashboard', dashboardRouter);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '../client', 'dist')));

  // Send your html which is the root for your react
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('API is running'));
}
