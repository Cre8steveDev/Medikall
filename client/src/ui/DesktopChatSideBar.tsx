import { FaPlus } from 'react-icons/fa6';
import { TChatFormat, TUserContext } from '../types/generalTypes';
import { SampleChatsList } from '../lib/constants';

import MiniUserDetails from './MiniUserDetails';
import ChatHistoryList from './ChatHistoryList';

/**
 * DesktopChatSideBar Component
 * @returns DesktopChatSideBar JSX
 */

const DesktopChatSideBar = ({
  user,
  setCurrentChat,
}: {
  user: TUserContext;
  setCurrentChat: React.Dispatch<React.SetStateAction<TChatFormat[]>>;
}) => {
  return (
    <section className="flex-2 flex flex-col w-[330px] min-w-[320px] max-w-[350px] md:my-10 px-5 pb-5">
      <div>
        <button className="flex items-center justify-center w-full gap-3 p-3 font-bold transition ease-in rounded-lg cursor-pointer bg-primary-green text-slate-50 hover:bg-opacity-60 active:bg-primary-blue active:hover:bg-opacity-100">
          <FaPlus className="text-xl" />
          Create New Chat
        </button>

        {/* Previous Saved Chats List */}
        <ChatHistoryList
          chatCollections={SampleChatsList}
          setCurrentChatSession={setCurrentChat}
        />

        {/* Mini User Profile Setting */}
        <MiniUserDetails user={user} />
      </div>
    </section>
  );
};

export default DesktopChatSideBar;
