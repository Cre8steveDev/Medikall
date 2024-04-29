import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

// Wallet Schema
const walletSchema = new Schema(
  {
    current_balance: { type: Number, default: 0.0 },
    transaction_history: [
      {
        type: Date,
        category: { type: String, enum: ['Deposit', 'Withdrawal'] },
        cost: { type: Number },
        paid_for: {
          type: String,
          required: false,
          enum: ['Appointment', 'Fund Wallet'],
        },
      },
    ],
  },
  { timestamps: true }
);

// Chat Schema
const chatSchema = new Schema(
  {
    userId: { type: ObjectId, ref: 'Users' },
    title: String,
    messages: [
      { role: String, message: String, date: String, photo_url: String },
    ],
  },
  { timestamps: true }
);

// Doctors Schema
const doctorSchema = new Schema(
  {
    profile_photo: {
      type: String,
      required: false,
      default: '/images/doctor-avatar.jpg',
    },
    department: { type: String, required: false },
    assigned_appointments: [{ type: ObjectId, ref: 'Appointments' }],
  },
  { timestamps: true }
);

// Appointment Schema
const appointmentSchema = new Schema(
  {
    userId: { type: ObjectId, ref: 'Users', required: true },
    department: { type: String, required: true },
    assigned_doctor: { type: ObjectId, ref: 'Doctors' },
    user_medical_history: [{ type: ObjectId, ref: 'Chats' }],
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Approved', 'Completed'],
    },
  },
  { timestamps: true }
);

//  Users Schema
const userSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

export {
  walletSchema,
  userSchema,
  doctorSchema,
  appointmentSchema,
  chatSchema,
};
