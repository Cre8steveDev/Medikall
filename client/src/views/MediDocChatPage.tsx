// MediDoc Chat Component - Conditionally renders a Chat UI
// For Public Access as well as private one for Collecting
// Medical History stored in patient's record
import { useSelector } from 'react-redux';
import { TUserContext } from '../types/generalTypes';
import PublicChatPage from '../ui/PublicChatPage';
import UserChatPage from '../ui/UserChatPage';
import { maxWidthClassSettings } from '../lib/constants';

// const userCurrent: TUserContext | null = useSelector(
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (state: any) => state?.user?.current
// );

const MediDocChat = () => {
  const userCurrent: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  return (
    <div className={`${maxWidthClassSettings} p-5`}>
      {userCurrent ? <UserChatPage /> : <PublicChatPage />}
    </div>
  );
};

export default MediDocChat;
