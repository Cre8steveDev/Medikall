// Define the Subscribe Newsletter
import { useState, useEffect } from 'react';

import { MdBookmarkAdded } from 'react-icons/md';
import { notifyInfo, notifySuccess } from './notifications';

import { maxWidthClassSettings } from '../lib/constants';

const SubscribeNewsletter = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    let intervalId: number;

    if (isDisabled && counter > 0) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    } else if (counter === 0) {
      setIsDisabled(false);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isDisabled, counter]);

  // handle Subscribe logic
  const handleSubscribeBtn = () => {
    if (email.length < 6 || !email.includes('@'))
      return notifyInfo('Please Provide a Valid Email Address');

    if (isDisabled) return;

    notifySuccess('Subscription Successful! 😃');
    setIsDisabled(true);
    setCounter(10);
  };

  //   Return JSX
  return (
    <div
      className={`${maxWidthClassSettings}  bg-primary-blue flex gap-3 p-5 rounded-3xl justify-center items-center shadow-2xl -translate-y-16`}
    >
      <h2 className="text-white text-xl text-center font-bold w-full">
        Subscribe to our Exclusive Newsletter
      </h2>

      <div className="bg-white rounded-xl flex items-center p-2 w-full">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          minLength={7}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          className="w-full self-stretch p-1 outline-none text-center text-[16px] text-gray-600"
        />

        <button
          disabled={isDisabled}
          className=" bg-primary-green text-white flex gap-2 items-center p-3 rounded-lg min-w-fit cursor-pointer text-md font-semibold hover:bg-opacity-65 transition ease-in active:bg-primary-blue disabled:cursor-not-allowed"
          onClick={handleSubscribeBtn}
        >
          <MdBookmarkAdded className="text-xl" />
          <p>Subscribe Now</p>
        </button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
