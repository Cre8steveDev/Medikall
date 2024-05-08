import { useEffect, useState } from 'react';
import { TOverviewProps } from '../types/generalTypes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
/**
 *
 * @returns JSX DashBoard Overfiew
 */

import { Link } from 'react-router-dom';
import { notifyError } from './notifications';
import Spinner from './Spinner';
import { signOut } from '../redux/slice/userSlice';

const DashboardOverview = () => {
  const [data, setData] = useState<TOverviewProps>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Make Call on component mount
  useEffect(() => {
    fetch('/api/dashboard/overview', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 403) {
          notifyError('Please login and try again!');
          dispatch(signOut());
          navigate('/sign-in');
          return;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        notifyError('There was some problem loading the data.');
        console.log(error);
      });
  }, [dispatch, navigate]);

  // Return JSX To DOM
  return (
    <section className="w-full max-w-[800px] p-5">
      {!data && <Spinner title="Loading Data..." width="50%" />}
      {data && (
        <>
          <div className="flex flex-row gap-5 justify-center text-center mx-auto cursor-default">
            <div className="w-[250px] h-[150px] bg-secondary-green rounded-xl flex items-center flex-col justify-center">
              <h2 className="text-[80px] leading-[80px] font-black text-slate-600">
                {data.num_appointments}
              </h2>
              <p className="text-slate-500">Appointments</p>
            </div>

            <div className="w-[250px] h-[150px] bg-secondary-green rounded-xl flex items-center flex-col justify-center">
              <h2 className="text-[80px] leading-[80px] font-black text-slate-600">
                {data.num_chats}
              </h2>
              <p className="text-slate-500">Saved Chats</p>
            </div>
          </div>

          <div className="p-5 bg-secondary-blue rounded-xl mx-auto mt-5 overflow-x-scroll">
            <h3 className="px-4 py-2 text-primary-blue text-lg font-bold">
              Most Recent Appointment Booked
            </h3>
            <table className="table-auto w-full">
              {/* Table Header Goes here  */}
              <thead className="text-left text-slate-600 text-sm sm:text-base">
                <tr>
                  <th className="px-4 py-2">Appointment</th>
                  <th className="px-4 py-2">Preferred Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>

              {/* Table Body goes here  */}
              <tbody className="text-sm sm:text-base">
                {Object.keys(data.recent_appointment).length > 0 && (
                  <tr className="bg-slate-50 rounded-lg text-slate-700">
                    <td className="px-4 py-2">
                      {data.recent_appointment.department}
                    </td>
                    <td className="px-4 py-2">
                      {data.recent_appointment.preferred_date}
                    </td>
                    <td className="px-4 py-2">
                      <p
                        className={`${
                          data.recent_appointment.status === 'Approved'
                            ? 'bg-primary-green'
                            : data.recent_appointment.status === 'Pending'
                            ? 'bg-orange-500'
                            : 'bg-primary-blue'
                        } p-1 text-white rounded-xl cursor-default text-center`}
                      >
                        {data.recent_appointment.status}
                      </p>
                    </td>

                    <td className="px-4 py-2">
                      <Link to={`/appointments/${data.recent_appointment._id}`}>
                        <button className="hover:underline transition ease-in">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                )}
                {!(Object.keys(data.recent_appointment).length > 0) && (
                  <tr className="bg-slate-50 rounded-lg text-slate-700">
                    <td className="px-4 py-2">
                      <p className="">
                        Sorry, No Appointments made at this time
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}{' '}
    </section>
  );
};

export default DashboardOverview;
