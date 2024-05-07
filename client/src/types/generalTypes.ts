import { ReactElement } from 'react';

export type TServiceForCarousel = {
  image: string;
  title: string;
  description: string;
  route: string;
  icon: ReactElement;
  color: string;
};

export type TCategoryForCarousel = {
  title: string;
  route: string;
  icon: string;
};

export type TUserContext = {
  _id: string;
  full_name: string;
  profile_photo: string;
  genotype: string;
  blood_group: string;
  gender: string;
  email: string;
};

export type TChatFormat = {
  role: string;
  message: string;
  date: string;
  photo_url: string;
};

export type TChatsList = {
  _id: string;
  userId: string;
  title: string;
  messages: TChatFormat[];
};

export type TAppointmentData = {
  occupation: string;
  preferred_date: string;
  department: string;
  medical_history: TChatFormat[];
};

export type TPaystackReference = {
  message: string;
  redirecturl: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
};

export type TAppointmentTableList = {
  department: string;
  preferred_date: string;
  status: 'Pending' | 'Approved' | 'Completed';
  _id: string;
};

export type TOverviewProps = {
  num_appointments: string;
  num_chats: string;
  recent_appointment: TAppointmentTableList;
};
