import { MdAutoDelete } from 'react-icons/md';
import { IoSendSharp } from 'react-icons/io5';
import { TChatFormat, TUserContext } from '../types/generalTypes';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import handleUserSendMessage from '../lib/handleUserSendMessage';
import LoadingBotResponse from './LoadingBotResponse';
import ErrorBotResponse from './ErrorBotResponse';
import chatAPI from '../lib/getAIResponseToUserMessage';
import { notifySuccess } from './notifications';

import DesktopChatSideBar from './DesktopChatSideBar';
import { FaSave } from 'react-icons/fa';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

/**
 * Represents the public chat page component.
 * This component displays a chat interface for public conversations about health.
 */

const UserChatPage = () => {
  const user: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  const botWelcome: TChatFormat = {
    role: 'assistant',
    photo_url: '/images/doctor-avatar.jpg',
    message: `Hello ${
      user?.full_name.split(' ')[0]
    }. How can I help you today? I'm more than happy to help you understand any health condition or questions you may want to know about`,
    date: `${new Date().toDateString()} | ${new Date().toLocaleTimeString()}`,
  };

  const [chats, setChats] = useState<TChatFormat[]>([botWelcome]);
  const [inputMessage, setInputMessage] = useState('');
  const [userSentResponse, setUserSentResponse] = useState(false);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [error, setError] = useState(false);
  const scrollingDivRef = useRef<HTMLDivElement>(null);
  const inputFieldRef = useRef<HTMLInputElement>(null);
  const [showSideBar, setShowSideBar] = useState(true);

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

    chatAPI(inputMessage, chats, false).then((data) => {
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

  // Return JSX
  return (
    <div className="flex w-full justify-center">
      {/*  */}
      {/* Left Panel */}
      {showSideBar && (
        <DesktopChatSideBar user={user!} setCurrentChat={setChats} />
      )}
      <div
        className="self-center bg-primary-blue p-1 -ml-3 sm:ml-0 text-white rounded-lg hover:bg-opacity-90 cursor-pointer"
        onClick={() => setShowSideBar((prev) => !prev)}
        title={`${showSideBar ? 'Hide Side Bar' : 'Show Side Bar'}`}
      >
        {showSideBar && <BsArrowBarLeft />}
        {!showSideBar && <BsArrowBarRight />}
      </div>

      {/* Chat Container Below */}
      <div className="w-full max-w-[700px] mx-auto sm:my-10 rounded-2xl shadow-xl flex flex-col justify-center h-full overflow-x-hidden animate-fade-in">
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

          {/* Save Chat Button */}
          <div
            className="self-center text-xl sm:text-2xl text-green-600 hover:text-green-500 w-[40px] cursor-pointer transition ease-in p-3"
            title="Save This Chat Session to your Account"
            onClick={handleClearChat}
          >
            <FaSave />
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
    </div>
  );
};

export default UserChatPage;
