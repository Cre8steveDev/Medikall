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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models/models");
const router = (0, express_1.Router)();
const loginErrorHandler = (err, req, res, next) => {
    if (err) {
        return res.status(403).json({ message: 'Invalid Login Details' });
    }
    next();
};
router.post('/create', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.user)
        return response.status(403).json({ message: 'Unauthorized Request' });
    const { userId, occupation, department, preferred_date, medical_history, transaction_ref, transaction_status, transaction_message, } = request.body;
    // Create the Medical history to database
    let newChat;
    let newAppointment;
    try {
        newChat = new models_1.Chats({
            userId,
            title: `Appointment: ${department}`,
            messages: medical_history,
        });
        newChat.save();
        // console.log(newChat);
    }
    catch (error) {
        return response.status(500).json({
            message: 'Problem with Appointment Creation (Storing Chats). Please Contact Support',
        });
    }
    // Create and Save the appointment to Database
    try {
        newAppointment = new models_1.Appointments({
            userId,
            occupation,
            department,
            preferred_date,
            status: 'Pending',
            user_medical_history: [newChat._id],
        });
        newAppointment.save();
        //
        const user = yield models_1.Users.findById(userId);
        if (!user) {
            console.log('User is not found!');
            return response.status(404).json({ message: 'User not found' });
        }
        // Update the wallet with the new transaction
        const newTransaction = {
            userId,
            transaction_ref,
            transaction_status,
            transaction_message,
            payment_for: `Appointment:${department}-${preferred_date}`,
        };
        const wallet = yield models_1.Wallets.updateOne({ _id: user.walletId }, { $push: { transaction_history: newTransaction } });
        yield models_1.Users.updateOne({ _id: user._id }, { $push: { appointments: newAppointment } });
        if (!wallet) {
            // Do some kind of logging, so that it can be monitored by the Customer Care
            throw new Error('There was an Error Updating the transaction.');
        }
        //
    }
    catch (error) {
        return response.status(500).json({
            message: 'Problem with Appointment Creation (Storing Appointment). Please Contact Support',
        });
    }
    return response.status(200).json({ message: 'Appointment Created' });
}));
// Get a Specific Appointment
router.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(request.params);
    return response
        .status(200)
        .json({ message: 'Endpoint hit', param: request.params });
}));
// Export Router
exports.default = router;
