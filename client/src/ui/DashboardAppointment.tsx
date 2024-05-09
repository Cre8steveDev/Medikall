/**
 *
 * @returns JSX DashBoard Overfiew
 */

import { Link, useNavigate } from 'react-router-dom';
import { TAppointmentTableList } from '../types/generalTypes';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { useDispatch } from 'react-redux';
import { notifyError } from './notifications';
import { signOut } from '../redux/slice/userSlice';

const DashboardAppointment = () => {
  const [appointmentsData, setAppointmentsData] =
    useState<TAppointmentTableList[]>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Load data on component load

  useEffect(() => {
    fetch('https://medikall.onrender.com/api/dashboard/appointments', {
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
      .then((data: TAppointmentTableList[]) => {
        console.log(data);
        setAppointmentsData(data);
      })
      .catch((error) => {
        notifyError('There was some problem loading the data.');
        console.log(error);
      });
  }, [dispatch, navigate]);

  // Return JSX
  return (
    <section className="w-full max-w-[800px] p-5">
      {!appointmentsData && (
        <div>
          <Spinner width="50%" title="Loading Appointment Data..." />
        </div>
      )}
      {appointmentsData && (
        <div className="p-2 sm:p-5 mx-auto bg-secondary-blue rounded-xl overflow-x-scroll">
          <h3 className="px-4 py-2 text-2xl font-bold text-primary-blue">
            All Appointments
          </h3>
          <table className="w-full table-auto">
            {/* Table Header Goes here  */}
            <thead className="text-left text-slate-600">
              <tr>
                <th className="px-4 py-2">Appointment</th>
                <th className="px-4 py-2">Preferred Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            {/* Table Body goes here  */}
            <tbody>
              {appointmentsData.map((elem) => {
                return (
                  <tr
                    className="bg-slate-50 rounded-lg text-slate-700"
                    key={elem._id}
                  >
                    <td className="px-4 py-2">{elem.department}</td>
                    <td className="px-4 py-2">{elem.preferred_date}</td>
                    <td className="px-4 py-2">
                      <p
                        className={`${
                          elem.status === 'Approved'
                            ? 'bg-primary-green'
                            : elem.status === 'Pending'
                            ? 'bg-orange-500'
                            : 'bg-primary-blue'
                        } p-1 text-white rounded-xl cursor-default text-center`}
                      >
                        {elem.status}
                      </p>
                    </td>

                    <td className="px-4 py-2">
                      <Link to={`/appointments/${elem._id}`}>
                        <button className="hover:underline transition ease-in">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <section className="mt-5">
            <button
              className="p-2 w-[100px] bg-primary-blue text-white rounded-xl disabled:bg-opacity-35 mr-5 disabled:cursor-not-allowed"
              disabled={appointmentsData.length < 1}
            >
              Previous
            </button>
            <button
              className="p-2 w-[100px] bg-primary-blue text-white rounded-xl disabled:bg-opacity-35"
              disabled={appointmentsData.length < 10}
            >
              Next
            </button>
          </section>
        </div>
      )}
    </section>
  );
};

export default DashboardAppointment;
