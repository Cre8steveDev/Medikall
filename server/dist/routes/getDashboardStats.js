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
//////////Return Stats for the Dashboard Overview Section
router.get('/overview', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const _user = request.user;
    console.log('Overview endpoint reached!');
    console.log('======================');
    console.log(_user);
    console.log(request.user);
    console.log('======================');
    if (request.user) {
        // Destructure details from user
        const user = request.user;
        const { _id, appointments } = user;
        const recent_appointment_id = appointments[appointments.length - 1];
        const appointment_length = appointments.length;
        const num_chats = yield models_1.Chats.countDocuments({ userId: _id });
        const recent_appointment = yield models_1.Appointments.findOne({
            _id: recent_appointment_id,
        });
        return response.status(200).json({
            num_appointments: appointment_length + '',
            num_chats: num_chats + '',
            recent_appointment: {
                department: recent_appointment === null || recent_appointment === void 0 ? void 0 : recent_appointment.department,
                preferred_date: recent_appointment === null || recent_appointment === void 0 ? void 0 : recent_appointment.preferred_date,
                status: recent_appointment === null || recent_appointment === void 0 ? void 0 : recent_appointment.status,
                _id: recent_appointment_id,
            },
        });
    }
    return response.status(403).json({ message: 'Error Occured' });
}));
////////// Return Latest and all Appointments for the user
router.get('/appointments', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const user = request.user;
    if (!user)
        return response.status(403).json({ message: 'Unauthorized Request' });
    const appointments = yield models_1.Appointments.find({ userId: user._id }, { department: 1, preferred_date: 1, status: 1, _id: 1 });
    response.status(200).json(appointments);
}));
exports.default = router;
