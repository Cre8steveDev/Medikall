/**
 *
 * @returns The Dashboard Navigation
 */

const DashboardNavigation = ({
  showTab,
  setShowTab,
}: {
  showTab: 'overview' | 'appointment' | 'settings';
  setShowTab: React.Dispatch<
    React.SetStateAction<'overview' | 'appointment' | 'settings'>
  >;
}) => {
  return (
    <div className="w-full flex gap-4 justify-center mt-8">
      <button
        className={`${
          showTab === 'overview'
            ? 'bg-primary-green text-white font-medium'
            : 'bg-slate-200'
        } p-2 rounded-lg hover:bg-opacity-70 transition ease-in`}
        onClick={() => setShowTab('overview')}
      >
        <p>Overview</p>
      </button>

      <button
        className={`${
          showTab === 'appointment'
            ? 'bg-primary-green text-white font-medium'
            : 'bg-slate-200'
        } p-2 rounded-lg hover:bg-opacity-70 transition ease-in`}
        onClick={() => setShowTab('appointment')}
      >
        <p>Appointments</p>
      </button>

      <button
        className={`${
          showTab === 'settings'
            ? 'bg-primary-green text-white font-medium'
            : 'bg-slate-200'
        } p-2 rounded-lg hover:bg-opacity-70 transition ease-in`}
        onClick={() => setShowTab('settings')}
      >
        <p>Settings</p>
      </button>
    </div>
  );
};

export default DashboardNavigation;
