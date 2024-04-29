import { TChatFormat } from '../types/generalTypes';

const UserMessage = ({ chat }: { chat: TChatFormat }) => {
  return (
    <div className=" w-full max-w-[600px] flex gap-3 flex-row-reverse">
      <img
        src={chat.photo_url}
        alt="Medidoc"
        className="w-[30px] md:w-[50px] rounded-full self-start"
      />
      <div className="bg-slate-100 p-3 sm:p-5 rounded-xl text-slate-700 shadow-lg sm:text-base text-xs">
        <p>{chat.message}</p>

        <p className="mt-3 text-[8px] sm:text-xs text-slate- w-fit  rounded-xl">
          {chat.date}
        </p>
      </div>
    </div>
  );
};

export default UserMessage;
