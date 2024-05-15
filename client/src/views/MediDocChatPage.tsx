/**
 * MediDoc Chat Component - Conditionally renders a Chat UI
 * Medical History stored in patient's record
 * For Public Access as well as private one for Collecting
 */

import { useSelector } from 'react-redux';
import { TUserContext } from '../types/generalTypes';
import PublicChatPage from '../ui/PublicChatPage';
import UserChatPage from '../ui/UserChatPage';
import { maxWidthClassSettings } from '../lib/constants';

/**
 * MediDoc Chat Component that conditionally renders
 * either the Public Chat UI or the UI for Signed In Users
 * @returns {JSX.Element}
 */
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
