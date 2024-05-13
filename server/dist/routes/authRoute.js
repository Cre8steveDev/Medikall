"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SignUp_1 = require("../controllers/auth/SignUp");
const passport_1 = __importDefault(require("passport"));
const localstrategy_1 = __importDefault(require("../controllers/strategies/localstrategy"));
const router = (0, express_1.Router)();
const loginErrorHandler = (err, req, res, next) => {
    if (err) {
        return res.status(403).json({ message: 'Invalid Login Details' });
    }
    next();
};
// SignUp Route
router.post('/signup', SignUp_1.SignUp);
// SignIn Route with PassportJS Authentication
passport_1.default.use(localstrategy_1.default);
router.post('/signin', passport_1.default.authenticate('local'), loginErrorHandler, (request, response) => {
    return response.status(200).json(request.user);
});
// Confirm Login Status
router.get('/status', (request, response) => {
    return request.user
        ? response.json({ authenticated: true })
        : response.json({ authenticated: false });
});
// Logout route
router.get('/logout', (request, response) => {
    // if (!request.user) return response.sendStatus(401);
    // Call the logout function on the request
    request.logout((err) => {
        if (err)
            return response.sendStatus(400);
        response.sendStatus(200);
    });
});
exports.default = router;
