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
exports.SignUp = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../../models/models");
const SignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { full_name, email, date_of_birth, blood_group, genotype, gender, phone_number, password, } = req.body;
    try {
        // Create New Wallet for the user
        const newWallet = new models_1.Wallets();
        yield newWallet.save();
        if (!newWallet)
            throw new Error('Error Initiating SignUp Process.');
        console.log('=======New Wallet');
        console.log(newWallet);
        // hash password before saving to db
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hashedPassword = bcryptjs_1.default.hashSync(password, salt);
        // Create New User
        const newUser = new models_1.Users({
            full_name,
            email,
            date_of_birth,
            blood_group,
            genotype,
            gender,
            phone_number,
            password: hashedPassword,
            walletId: newWallet._id,
        });
        // Try Saving the user, if it fails, delete the created wallet
        // Then throw another error to be caught by the outer catch
        try {
            yield newUser.save();
        }
        catch (error) {
            yield models_1.Wallets.findByIdAndDelete(newWallet._id);
            throw new Error('Error Creating New User!');
        }
        // Catch any error that may have occured
    }
    catch (error) {
        return res.status(403).json({ message: error.message });
    }
    return res
        .status(201)
        .json({ message: 'Received your Response! As you were!' });
});
exports.SignUp = SignUp;
