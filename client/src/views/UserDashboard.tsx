import { useSelector } from 'react-redux';
import { maxWidthClassSettings } from '../lib/constants';
import { TUserContext } from '../types/generalTypes';
import DashboardOverview from '../ui/DashboardOverview';
import DashboardMiniSideBar from '../ui/DashboardMiniSideBar';
import DashboardNavigation from '../ui/DashboardNavigation';

import { useState } from 'react';
import DashboardSetting from '../ui/DashboardSetting';
import DashboardAppointment from '../ui/DashboardAppointment';

// User DashBoard

const UserDashboard = () => {
  const user: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  const [showTab, setShowTab] = useState<
    'overview' | 'appointment' | 'settings'
  >('overview');

  return (
    <section className="w-full ">
      {/* md:h-[calc(100vh-10px)] */}
      <div
        className={`${maxWidthClassSettings} flex flex-col gap-2 items-center justify-center overflow-x-hidden overflow-y-scroll`}
      >
        <DashboardNavigation showTab={showTab} setShowTab={setShowTab} />

        {/* Tabbed Views */}
        <section className="w-full flex flex-col sm:flex-row gap-8 justify-center md:p-5">
          {showTab === 'overview' && <DashboardMiniSideBar user={user!} />}

          {/* Tabbed Component for Overview | Appointment | Edit Settings */}
          {showTab === 'overview' && <DashboardOverview />}
          {showTab === 'appointment' && <DashboardAppointment />}
          {showTab === 'settings' && <DashboardSetting />}
        </section>
      </div>
    </section>
  );
};

export default UserDashboard;
