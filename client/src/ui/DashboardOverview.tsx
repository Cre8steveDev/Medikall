/**
 *
 * @returns JSX DashBoard Overfiew
 */

import { Link } from 'react-router-dom';

const DashboardOverview = () => {
  return (
    <section className="w-full max-w-[800px] p-5">
      <div className="flex sm:flex-row flex-col gap-5 justify-center text-center mx-auto cursor-default">
        <div className="w-[250px] h-[150px] bg-secondary-green rounded-xl flex items-center flex-col justify-center">
          <h2 className="text-[80px] leading-[80px] font-black text-slate-600">
            {4}
          </h2>
          <p className="text-slate-500">Appointments</p>
        </div>

        <div className="w-[250px] h-[150px] bg-secondary-green rounded-xl flex items-center flex-col justify-center">
          <h2 className="text-[80px] leading-[80px] font-black text-slate-600">
            {8}
          </h2>
          <p className="text-slate-500">Saved Chats</p>
        </div>
      </div>

      <div className="p-5 bg-secondary-blue rounded-xl mx-auto mt-5">
        <h3 className="px-4 py-2 text-primary-blue text-lg font-bold">
          Most Recently Approved Appointment
        </h3>
        <table className="table-auto w-full">
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
            <tr className="bg-slate-50 rounded-lg text-slate-700">
              <td className="px-4 py-2">Urology</td>
              <td className="px-4 py-2">2024-07-15</td>
              <td className="px-4 py-2">
                <p className="p-1 bg-primary-green text-white rounded-xl cursor-default text-center">
                  Approved
                </p>
              </td>

              <td className="px-4 py-2">
                <Link to={`/appointments/${674899384748767}`}>
                  <button className="hover:underline transition ease-in">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardOverview;
