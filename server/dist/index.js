"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import passport and session
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
// import Routers
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const appointments_1 = __importDefault(require("./routes/appointments"));
const getDashboardStats_1 = __importDefault(require("./routes/getDashboardStats"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const secret = process.env.COOKIE_SECRET;
const session_secret = process.env.SESSION_SECRET;
// Register middlewares on the app instance
app.use((0, cookie_parser_1.default)(secret));
// app.use(
//   cors({
//     origin: 'https://doc-medikall.onrender.com',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   })
// );
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// session middleware on the app instance
// app.use(
//   session({
//     secret: session_secret!,
//     saveUninitialized: true,
//     resave: false,
//     cookie: { maxAge: 6000 * 7000 * 2, secure: true, sameSite: 'none' }, //almost 24 hours
//   })
// );
app.use((0, express_session_1.default)({
    secret: session_secret,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 6000 * 7000 * 2,
        secure: false, // set to false because your site is not served over HTTPS
        sameSite: 'lax', // set to 'lax' or 'strict' because secure is false
    },
}));
// Initialize passport on the app
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Connect to DB
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        // Mongoose Client Options
        const clientOptions = {
            serverApi: { version: '1', strict: true, deprecationErrors: true },
        };
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URI, clientOptions);
            console.log('Connected to DB!');
            // Only Start Listening after successful connection to DB
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
            // Catch possible Errors
        }
        catch (error) {
            console.log('There was an error:\n', error);
            process.exit();
        }
    });
}
/////////////////////////////////
// Connect the Database and Start The Server on Success
connectDB();
/////////////////////////////////
// Define Routes on the app instance
app.get('/health', (req, res) => {
    res.send('Yuuup! Server still up and running 😄');
});
app.use('/api/auth', authRoute_1.default);
app.use('/api/appointment', passport_1.default.authenticate('local'), appointments_1.default);
app.use('/api/dashboard', passport_1.default.authenticate('local'), getDashboardStats_1.default);
if (process.env.NODE_ENV === 'production') {
    const __dirname = path_1.default.resolve();
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client', 'dist')));
    // Send your html which is the root for your react
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, '../client', 'dist', 'index.html')));
}
else {
    app.get('/', (req, res) => res.send('API is running'));
}
