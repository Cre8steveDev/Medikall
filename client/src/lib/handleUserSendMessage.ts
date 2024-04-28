import { TChatFormat } from '../types/generalTypes';

const handleUserSendMessage = (
  message: string,
  updateChatsArray: React.Dispatch<React.SetStateAction<TChatFormat[]>>
) => {
  updateChatsArray((prev) => [
    ...prev,
    {
      role: 'user',
      message: message,
      photo_url: '/images/profile.jpeg',
      date: `${new Date().toDateString()} | ${new Date().toLocaleTimeString()}`,
    },
  ]);
};

export default handleUserSendMessage;
