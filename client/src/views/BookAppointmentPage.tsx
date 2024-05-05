// Book Appointment Page Component
import { MdAutoDelete } from 'react-icons/md';
import { IoSendSharp } from 'react-icons/io5';
import { TChatFormat, TUserContext } from '../types/generalTypes';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BotMessage from '../ui/BotMessage';
import UserMessage from '../ui/UserMessage';
import handleUserSendMessage from '../lib/handleUserSendMessage';
import LoadingBotResponse from '../ui/LoadingBotResponse';
import ErrorBotResponse from '../ui/ErrorBotResponse';
import chatAPI from '../lib/getAIResponseToUserMessage';
import { notifySuccess } from '../ui/notifications';

/**
 * Represents Appointment Booking
 * This component for the workflow for booking an appointment on the front end
 */

export type TAppointmentData = {
  occupation: string;
  preferred_date: string;
  department: string;
  medical_history: TChatFormat[];
};

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Radiology'];
const today = new Date();
const dateString = `${today.getFullYear()}-${String(
  today.getMonth() + 1
).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

const BookAppointmentPage = () => {
  const user: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  const navigate = useNavigate();

  const initialAppointmentData: TAppointmentData = {
    occupation: '',
    preferred_date: '',
    department: '',
    medical_history: [],
  };

  const botWelcome: TChatFormat = {
    role: 'assistant',
    photo_url: '/images/doctor-avatar.jpg',
    message: `Hello ${user?.full_name.split(' ')[0]}.`,
    date: `${new Date().toDateString()} | ${new Date().toLocaleTimeString()}`,
  };

  const [chats, setChats] = useState<TChatFormat[]>([botWelcome]);
  const [inputMessage, setInputMessage] = useState('');
  const [userSentResponse, setUserSentResponse] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const [error, setError] = useState(false);
  const scrollingDivRef = useRef<HTMLDivElement>(null);
  const inputFieldRef = useRef<HTMLInputElement>(null);

  const [appointmentData, setAppointmentData] = useState<TAppointmentData>(
    initialAppointmentData
  );

  //  Clear current chat session
  const handleClearChat = () => {
    setChats([botWelcome]);
    notifySuccess('Your Current Chatting Session has been cleared.');
    setLoadingResponse(false);
  };

  useEffect(() => {
    // Scroll down the footer for mobile keyboard scrolling the screen
    window.scrollTo(0, 0);

    // Check that user sent a response and input greater than 4
    if (!userSentResponse || inputMessage.length < 4) return;

    handleUserSendMessage(inputMessage, setChats);
    setInputMessage('');
    setError(false);
    setLoadingResponse(true);

    let aiResponseObject: TChatFormat | null = null;

    chatAPI(inputMessage, chats, true).then((data) => {
      aiResponseObject = data;

      if (!aiResponseObject) {
        setError(true);
      } else {
        // If all is well
        setError(false);
        setChats((prev) => {
          return [...prev, aiResponseObject as TChatFormat];
        });
      }

      setLoadingResponse(false);
      setUserSentResponse(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSentResponse]);

  // Scroll to the last item when the component mounts or updates
  useEffect(() => {
    if (scrollingDivRef.current) {
      scrollingDivRef.current.scrollTop = scrollingDivRef.current.scrollHeight;
    }
  }, [chats]);

  // handle verification of user submitting entry
  const handleSubmissionValidation = () => {
    if (userSentResponse) return;
    setUserSentResponse(true);
  };

  const handleFormValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setAppointmentData((prev_data) => {
      return { ...prev_data, [e.target.name]: e.target.value };
    });
  };

  // Add event listener on Enter Key Button
  useEffect(() => {
    if (inputFieldRef.current) {
      const input = inputFieldRef.current;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmissionValidation();
        }
      };

      input.addEventListener('keydown', handleKeyDown);

      // Clean up function on unmount
      return () => {
        input.removeEventListener('keydown', handleKeyDown);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    navigate('/sign-in');
    return null;
  }

  // Return JSX
  return (
    <div className="flex flex-col w-full justify-center sm:mt-10 h-full items-center">
      {/*  Simple Data Collection */}

      <section className="mx-auto flex gap-10 mb-5">
        <div
          className={`w-[30px] h-[30px] flex items-center justify-center rounded-full bg-primary-green text-white
          }`}
        >
          <p>1</p>
        </div>

        <div
          className={`w-[30px] h-[30px] flex items-center justify-center rounded-full ${
            showChat ? 'bg-primary-green text-white' : 'bg-slate-300'
          }`}
        >
          <p>2</p>
        </div>
      </section>

      {!showChat && (
        <div className="w-full max-w-[500px] mx-auto sm:mb-10 rounded-2xl shadow-xl flex flex-col justify-center items-center h-fit py-8 overflow-x-hidden">
          <h2 className="text-2xl font-bold text-primary-blue">
            Let's Get you Started
          </h2>
          <p className="text-xs mb-4 text-slate-700">
            Please follow the steps to book your appointment.
          </p>
          <input
            name="occupation"
            placeholder="What is your Occupation?"
            required
            value={appointmentData.occupation}
            className="w-full max-w-[400px] p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            minLength={8}
            maxLength={40}
            onChange={handleFormValueChange}
          />

          <label
            htmlFor="date"
            className="w-full max-w-[400px] p-2 text-slate-600"
          >
            <p className="">Preferred Date:</p>
          </label>
          <input
            id="date"
            name="preferred_date"
            placeholder="Preferred Date"
            required
            type="date"
            min={dateString}
            value={appointmentData.preferred_date}
            className="w-full max-w-[400px] p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            onChange={handleFormValueChange}
          />

          <label
            htmlFor="department"
            className="w-full max-w-[400px] p-2 text-slate-600"
          >
            <p className="">Preferred Department:</p>
          </label>

          <select
            id="department"
            name="department"
            value={appointmentData.department}
            onChange={handleFormValueChange}
            className="w-full max-w-[400px] p-3 outline-none valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Chat Container Below */}

      {showChat && (
        <div className="w-full max-w-[550px] mx-auto sm:mb-10 rounded-2xl shadow-xl flex flex-col justify-center h-[600px] overflow-x-hidden">
          <section className="w-full bg-secondary-blue p-3 sm:p-6 flex justify-between">
            <div className="flex gap-4 items-center w-full">
              <img
                src="/images/doctor-avatar.jpg"
                alt="MediDoc"
                className="rounded-full w-[35px] sm:w-[60px] "
              />
              <div>
                <p className="sm:text-lg font-bold text-slate-700">
                  MediDoc | AI
                </p>
                <div className="flex text-primary-green font-bold items-center gap-3">
                  <p className="text-xs sm:text-sm">Online</p>
                  <div className="w-[10px] h-[10px] bg-primary-green rounded-full animate-ping"></div>{' '}
                </div>
              </div>
            </div>

            {/* Clear Clear Chat */}
            <div
              className="self-center text-xl sm:text-2xl text-red-600 hover:text-red-500 w-[40px] cursor-pointer transition ease-in p-3"
              title="Delete Chat"
              onClick={handleClearChat}
            >
              <MdAutoDelete />
            </div>
          </section>

          {/* Chat Container */}
          <div
            ref={scrollingDivRef}
            className="w-full h-[55vh] xs:h-[70vh]  sm:h-[550px] overflow-x-hidden overflow-y-scroll bg-opacity-25 p-5 md:p-10 flex flex-col gap-5 bg-scroll"
            style={{
              backgroundImage: "url('/images/chat-background.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Chat Message container */}
            {chats.map((chat, idx) => {
              if (chat.role === 'assistant')
                return <BotMessage key={idx} chat={chat} />;
              return <UserMessage key={idx} chat={chat} />;
            })}

            {loadingResponse && <LoadingBotResponse />}
            {error && <ErrorBotResponse />}

            {/* End of container close tag */}
          </div>

          {/* Input and Submit Button */}
          <div className="w-full bg-white sm:h-[80px] py-3 px-3 md:px-8 flex justify-between gap-3">
            <input
              type="text"
              name="Message_Field"
              ref={inputFieldRef}
              placeholder="Type your message here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="w-full outline-0 text-xs sm:text-lg text-slate-700"
            />
            <button
              type="button"
              disabled={userSentResponse || inputMessage.length < 4}
              className={`flex items-center gap-2 text-xl font-bold text-white bg-primary-green p-3 rounded-lg hover:bg-opacity-85 cursor-pointer self-center disabled:cursor-not-allowed disabled:bg-opacity-40`}
              onClick={() => {
                handleSubmissionValidation();
              }}
            >
              <p className="sm:block hidden">Send</p>
              <IoSendSharp />
            </button>
          </div>
        </div>
      )}

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
            onClick={() => alert('Show Check Out here')}
          >
            Proceed to Check Out
          </button>
        )}
      </section>
    </div>
  );
};

export default BookAppointmentPage;
