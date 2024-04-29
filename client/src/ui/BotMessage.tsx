import { TChatFormat } from '../types/generalTypes';

const BotMessage = ({ chat }: { chat: TChatFormat }) => {
  return (
    <div className=" w-full max-w-[600px] flex gap-3">
      <img
        src={chat.photo_url}
        alt="Medidoc"
        className="w-[30px] md:w-[50px] rounded-full self-start"
      />
      <div className="bg-primary-blue p-3 sm:p-5 rounded-xl text-white shadow-lg whitespace-pre-wrap sm:text-base text-xs">
        <p>{chat.message}</p>

        <p className="mt-3 text-[8px] sm:text-xs text-slate- w-fit  rounded-xl">
          {chat.date}
        </p>
      </div>
    </div>
  );
};

export default BotMessage;
