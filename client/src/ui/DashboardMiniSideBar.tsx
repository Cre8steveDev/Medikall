import { Link } from 'react-router-dom';
import { TUserContext } from '../types/generalTypes';

/**
 * Mini User Details - Reussable Component to display small dashboard
 * @returns
 */
const DashboardMiniSideBar = ({ user }: { user: TUserContext }) => {
  return (
    <div className="p-3 mt-5 overflow-x-hidden transition ease-in rounded-lg bg-slate-100 hover:scale-[90%] cursor-default min-w-[300px] hidden sm:block self-start">
      <div className="flex flex-col items-center gap-3 text-base text-slate-500">
        <img
          src={user.profile_photo}
          alt="User Picture"
          className="w-[130px] rounded-full"
        />
        <h3 className="-mt-2 font-bold text-primary-green">
          {user.full_name}{' '}
          <span className="w-[20px] bg-primary-green p-[7px] rounded-xl text-white text-[10px]">
            {user.gender}
          </span>
        </h3>
      </div>

      <div className="p-2 -mt-1 text-sm text-center">
        <p>
          <span className="text-slate-500"> Blood Group:</span>{' '}
          {user.blood_group + '  '} |{' '}
          <span className="text-slate-500">Genotype: </span>
          {user.genotype}
        </p>
        <hr className="my-2" />
        <p className="text-slate-800 text-[16px]">{user.email}</p>
        <hr className="my-2" />
      </div>

      <div className="flex justify-center gap-2 p-2 -mt-1 text-sm text-center">
        <Link to="/dashboard">
          <p className="w-full px-2 py-1 text-xs text-white rounded-lg cursor-pointer bg-primary-blue">
            Edit Profile
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardMiniSideBar;
