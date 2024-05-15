import { TChatFormat } from '../types/generalTypes';

/**
 * Handles the user's sent message and updates the chats array.
 *
 * @param message {string} - The message sent by the user.
 * @param updateChatsArray - The function to update the chats array.
 */
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
