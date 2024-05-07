/**
 *
 * @returns JSX DashBoard Overfiew
 */

import { Link } from 'react-router-dom';

const DashboardAppointment = () => {
  return (
    <section className="w-full max-w-[800px] p-5">
      <div className="p-5 mx-auto bg-secondary-blue rounded-xl">
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
            {[1, 2, 3, 4, 5, 6].map((elem) => {
              return (
                <tr
                  key={elem}
                  className="rounded-lg bg-slate-50 text-slate-700"
                >
                  <td className="px-4 py-2">Urology</td>
                  <td className="px-4 py-2">2024-07-15</td>
                  <td className="px-4 py-2">
                    <p className="p-1 text-center text-white cursor-default bg-primary-green rounded-xl">
                      Approved
                    </p>
                  </td>
                  <td className="px-4 py-2">
                    <Link to={`/appointments/${674899384748767}`}>
                      <button className="transition ease-in hover:underline">
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
            disabled
          >
            Previous
          </button>
          <button className="p-2 w-[100px] bg-primary-blue text-white rounded-xl disabled:bg-opacity-35">
            Next
          </button>
        </section>
      </div>
    </section>
  );
};

export default DashboardAppointment;
