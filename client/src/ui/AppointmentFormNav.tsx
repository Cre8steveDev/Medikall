import { useNavigate } from 'react-router-dom';
import { TAppointmentData, TUserContext } from '../types/generalTypes';
import { useSelector } from 'react-redux';

import { usePaystackPayment } from 'react-paystack';
import { notifyError, notifySuccess } from './notifications';
// import { notifyError } from './notifications';

const AppointmentFormNav = ({
  showChat,
  setShowChat,
  appointmentData,
}: {
  showChat: boolean;
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  appointmentData: TAppointmentData;
}) => {
  const navigate = useNavigate();
  const user: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  // Paystack Testing
  const config = {
    reference:
      new Date().getTime().toString() + '_' + user?.full_name.replace(' ', '_'),
    email: user?.email,
    amount: 200000,
    publicKey: import.meta.env.VITE_PAYSTACK_KEY,
  };

  // you can call this function anything
  const onSuccess = (reference: unknown) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    notifySuccess(
      "Booking Successful! You'll get an email soon to confirm your appointment date."
    );
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    notifyError('Sorry, there was an error making payment. Please Try again');
    console.log('closed');
  };

  const initializePayment = usePaystackPayment(config);

  const handleCheckOutPayment = () => {
    console.log('===============user object');
    console.log(user);
    console.log('==================end');

    console.log('===============appointmentData object');
    console.log(appointmentData);
    console.log('==================end');

    console.log('===============config object');
    console.log(config);
    console.log('==================end');

    initializePayment({ onSuccess, onClose });
  };

  return (
    <section className="w-full flex gap-4 max-w-[500px] mx-auto mb-5 font-medium">
      {!showChat && (
        <button
          className="w-full p-3 rounded-lg bg-secondary-green text-slate-700 hover:bg-opacity-85"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      )}

      {!showChat && (
        <button
          className="w-full p-3 rounded-lg bg-primary-green text-white hover:bg-opacity-85"
          onClick={() => setShowChat(true)}
        >
          Next
        </button>
      )}

      {showChat && (
        <button
          className="w-full p-3 rounded-lg bg-secondary-green text-slate-700 hover:bg-opacity-85"
          onClick={() => setShowChat(false)}
        >
          Back
        </button>
      )}

      {showChat && (
        <button
          className="w-full p-3 rounded-lg bg-primary-green text-white hover:bg-opacity-85"
          onClick={() => handleCheckOutPayment()}
        >
          Pay N2,000
        </button>
      )}
    </section>
  );
};

export default AppointmentFormNav;
