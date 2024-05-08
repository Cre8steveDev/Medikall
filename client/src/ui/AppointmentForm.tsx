import { dateString, departments } from '../lib/constants';
import { TAppointmentData } from '../types/generalTypes';

const AppointmentForm = ({
  appointmentData,
  handleFormValueChange,
}: {
  appointmentData: TAppointmentData;
  handleFormValueChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}) => {
  return (
    <div className="w-full max-w-[500px] mx-auto mb-8 sm:mb-10 rounded-2xl shadow-xl flex flex-col justify-center items-center h-fit py-8 px-4 sm:px-0 overflow-x-hidden animate-fade-in bg-white">
      <h2 className="text-2xl font-bold text-primary-blue">
        Let's Get you Started
      </h2>
      <p className="text-xs mb-4 text-slate-700">
        Please follow the steps to book your appointment.
      </p>
      <input
        name="occupation"
        placeholder="What is your Occupation?"
        required
        value={appointmentData.occupation}
        className="w-full max-w-[400px] p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
        minLength={8}
        maxLength={40}
        onChange={handleFormValueChange}
      />

      <label htmlFor="date" className="w-full max-w-[400px] p-2 text-slate-600">
        <p className="">Preferred Date:</p>
      </label>
      <input
        id="date"
        name="preferred_date"
        placeholder="Preferred Date"
        required
        type="date"
        min={dateString}
        value={appointmentData.preferred_date}
        className="w-full max-w-[400px] p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
        onChange={handleFormValueChange}
      />

      <label
        htmlFor="department"
        className="w-full max-w-[400px] p-2 text-slate-600"
      >
        <p className="">Preferred Department (Optional):</p>
      </label>

      <select
        id="department"
        name="department"
        value={appointmentData.department}
        onChange={handleFormValueChange}
        className="w-full max-w-[400px] p-3 outline-none valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
      >
        {departments.map((department) => (
          <option
            key={department}
            value={department}
            className="leading-[150%]"
          >
            {department}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppointmentForm;
