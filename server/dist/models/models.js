"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointments = exports.Doctors = exports.Chats = exports.Wallets = exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import the schemas
const schemas_1 = require("./schemas");
// Create all Models from the Schemas
const Wallets = mongoose_1.default.model('Wallets', schemas_1.walletSchema);
exports.Wallets = Wallets;
const Chats = mongoose_1.default.model('Chats', schemas_1.chatSchema);
exports.Chats = Chats;
const Doctors = mongoose_1.default.model('Doctors', schemas_1.doctorSchema);
exports.Doctors = Doctors;
const Appointments = mongoose_1.default.model('Appointments', schemas_1.appointmentSchema);
exports.Appointments = Appointments;
const Users = mongoose_1.default.model('Users', schemas_1.userSchema);
exports.Users = Users;
