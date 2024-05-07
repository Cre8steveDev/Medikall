import { useNavigate } from 'react-router-dom';

import {
  TAppointmentData,
  TUserContext,
  TPaystackReference,
  TChatFormat,
} from '../types/generalTypes';
import { useDispatch, useSelector } from 'react-redux';

import { usePaystackPayment } from 'paystack-react';
import { notifyError, notifySuccess } from './notifications';
import { initialAppointmentData } from '../lib/constants';
import { signOut } from '../redux/slice/userSlice';

const AppointmentFormNav = ({
  showChat,
  setShowChat,
  appointmentData,
  setChats,
  setAppointmentData,
}: {
  showChat: boolean;
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  appointmentData: TAppointmentData;
  setChats: React.Dispatch<React.SetStateAction<TChatFormat[]>>;
  setAppointmentData: React.Dispatch<React.SetStateAction<TAppointmentData>>;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  const initializePayment = usePaystackPayment({
    amount: 200000,
    reference: user?._id.toString() + '_' + new Date().getTime().toString(),
    email: user?.email as string,
    currency: 'NGN',
    publicKey: import.meta.env.VITE_PAYSTACK_KEY,
    firstname: user?.full_name.split(' ')[0],
  });

  function onSuccess(reference: TPaystackReference) {
    // Implementation for whatever you want to do with reference and after the successful transaction

    // console.log(appointmentData);
    // console.log(reference);

    // Send data to the backend
    fetch('/api/appointment/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...appointmentData,
        userId: user?._id,
        transaction_ref: reference.reference,
        transaction_status: reference.status,
        transaction_message: reference.message,
      }),
    })
      .then((response) => {
        if (response.status === 403) {
          notifyError('Please login and try again!');
          dispatch(signOut());
          navigate('/sign-in');
          return;
        }
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setChats([]);
        setAppointmentData(initialAppointmentData);

        notifySuccess('Payment for Booking Successful!');
        notifySuccess('Approved Date & Time Will be sent to your mail');
        navigate('/dashboard');

        return;
      })
      .catch((error) => {
        notifyError(
          'Sorry, there was an error. You may want to contact support.'
        );
        console.log(error);
      });
  }

  function onClose() {
    console.log('closed');
  }

  const handlePayment = () => {
    initializePayment(onSuccess, onClose);
  };

  return (
    <section className="w-full flex gap-4 max-w-[500px] mx-auto mb-10 font-medium">
      {!showChat && (
        <button
          className="w-full p-3 rounded-lg bg-slate-300 text-slate-700 hover:bg-opacity-85"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      )}

      {!showChat && (
        <button
          disabled={
            appointmentData.occupation.length < 4 ||
            appointmentData.preferred_date.length < 4
          }
          className="w-full p-3 rounded-lg bg-primary-green text-white hover:bg-opacity-85 disabled:bg-opacity-50 disabled:cursor-not-allowed"
          onClick={() => setShowChat(true)}
        >
          Next
        </button>
      )}

      {showChat && (
        <button
          className="w-full p-3 rounded-lg bg-slate-300 text-slate-700 hover:bg-opacity-85"
          onClick={() => setShowChat(false)}
        >
          Back
        </button>
      )}

      {showChat && (
        <button
          disabled={appointmentData.medical_history.length < 15}
          className="w-full p-3 rounded-lg bg-primary-green text-white hover:bg-opacity-85 disabled:bg-opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePayment()}
        >
          Complete Booking
        </button>
      )}
    </section>
  );
};

export default AppointmentFormNav;
