// // Paystack Testing
// const config = {
//   reference:
//     new Date().getTime().toString() + '_' + user?.full_name.replace(' ', '_'),
//   email: user?.email,
//   amount: 200000,
//   publicKey: import.meta.env.VITE_PAYSTACK_KEY,
// };

// // you can call this function anything
// const onSuccess = (reference: unknown) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
//   notifySuccess(
//     "Booking Successful! You'll get an email soon to confirm your appointment date."
//   );
// };

// // you can call this function anything
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   notifyError('Sorry, there was an error making payment. Please Try again');
//   console.log('closed');
// };

// const initializePayment = usePaystackPayment(config);
