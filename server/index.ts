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

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.COOKIE_SECRET || 'u9hiafodhpaschaposuidf';
const session_secret = process.env.SESSION_SECRET || 'DQ9E8RQWE98xxRQW8ER';

// Register middlewares on the app instance
app.use(cors());
app.use(cookieParser(secret));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware on the app instance
app.use(
  session({
    secret: session_secret,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 6000 * 7000 * 2 }, //almost 24 hours
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

// Call the Function
connectDB();

// Try to insert into the models

// Define Routes on the app instance
app.get('/health', (req: Request, res: Response) => {
  res.send('Yuuup! Server still up and running 😄');
});

app.use('/api/auth', authRouter);
app.use('/api/appointment', appointmentRouter);
