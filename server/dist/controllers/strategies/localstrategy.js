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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const models_1 = require("../../models/models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Create Serializer and deserializer on the passport object
passport_1.default.serializeUser((user, done) => {
    done(null, user === null || user === void 0 ? void 0 : user._id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkUser = yield models_1.Users.findById(id);
        if (!checkUser)
            throw new Error('User Not Found!');
        const { _id, full_name, profile_photo, genotype, blood_group, gender, email, appointments, } = checkUser;
        // If id is a valid user, pass on to be authenticated
        done(null, {
            _id: _id.toString(),
            full_name,
            profile_photo,
            genotype,
            blood_group,
            gender,
            email,
            appointments,
        });
    }
    catch (error) {
        done(error, null);
    }
}));
// Create the local strategy middleware on the passport object
const localStrategy = new passport_local_1.Strategy({ usernameField: 'email', passwordField: 'password' }, (username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkUser = yield models_1.Users.findOne({ email: username });
        if (!checkUser)
            throw new Error('Invalid login Credentials U');
        if (!bcryptjs_1.default.compareSync(password, checkUser.password))
            throw new Error('Invalid login Credentials P');
        // If the login details is correct,
        // pass the user object to the password verification function done
        // Pass only important details to the frontend in json
        const { _id, full_name, profile_photo, genotype, blood_group, gender, email, appointments, } = checkUser;
        done(null, {
            _id: _id.toString(),
            full_name,
            profile_photo,
            genotype,
            blood_group,
            gender,
            email,
            appointments,
        });
        // Catching all errors
    }
    catch (error) {
        done(error, undefined);
    }
}));
exports.default = localStrategy;
