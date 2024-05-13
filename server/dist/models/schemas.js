"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSchema = exports.appointmentSchema = exports.doctorSchema = exports.userSchema = exports.walletSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const { ObjectId } = mongoose_1.Schema.Types;
// Wallet Schema
const walletSchema = new mongoose_1.Schema({
    current_balance: { type: Number, default: 0.0 },
    transaction_history: [
        {
            userId: String,
            transaction_ref: String,
            transaction_status: String,
            transaction_message: String,
            payment_for: String,
        },
    ],
}, { timestamps: true });
exports.walletSchema = walletSchema;
// Chat Schema
const chatSchema = new mongoose_1.Schema({
    userId: { type: ObjectId, ref: 'Users' },
    title: String,
    messages: [
        { role: String, message: String, date: String, photo_url: String },
    ],
}, { timestamps: true });
exports.chatSchema = chatSchema;
// Doctors Schema
const doctorSchema = new mongoose_1.Schema({
    profile_photo: {
        type: String,
        required: false,
        default: '/images/doctor-avatar.jpg',
    },
    department: { type: String, required: false },
    assigned_appointments: [{ type: ObjectId, ref: 'Appointments' }],
}, { timestamps: true });
exports.doctorSchema = doctorSchema;
// Appointment Schema
const appointmentSchema = new mongoose_1.Schema({
    userId: { type: ObjectId, ref: 'Users', required: true },
    occupation: String,
    department: String,
    preferred_date: String,
    assigned_doctor: {
        type: ObjectId,
        ref: 'Doctors',
        required: false,
        default: new mongoose_1.default.Types.ObjectId(),
    },
    assigned_appointment_date: { type: String, required: false, default: '' },
    assigned_appointment_time: { type: String, required: false, default: '' },
    assigned_appointment_room: { type: Number, required: false, default: 0 },
    user_medical_history: [{ type: ObjectId, ref: 'Chats' }],
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Approved', 'Completed'],
    },
}, { timestamps: true });
exports.appointmentSchema = appointmentSchema;
//  Users Schema
const userSchema = new mongoose_1.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date_of_birth: { type: String, required: true },
    blood_group: { type: String, required: false },
    genotype: { type: String, required: false },
    phone_number: { type: Number, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    profile_photo: {
        type: String,
        required: false,
        default: '/images/profile.jpeg',
    },
    walletId: { type: ObjectId, ref: 'Wallet' },
    appointments: [{ type: ObjectId, ref: 'Appointments' }],
    chats: [{ type: ObjectId, ref: 'Chats' }],
}, { timestamps: true });
exports.userSchema = userSchema;
