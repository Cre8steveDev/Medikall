// Implement the SignIn Page
// Consider using Social Logins Too
import { useState } from 'react';
import { notifyError, notifySuccess } from '../ui/notifications';
import { Link, useNavigate } from 'react-router-dom';

type TFormData = {
  full_name: string;
  email: string;
  date_of_birth: string;
  blood_group?: string;
  genotype?: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  gender: string;
};

const initialFormData: TFormData = {
  full_name: '',
  email: '',
  date_of_birth: '',
  blood_group: '',
  genotype: '',
  gender: '',
  phone_number: '',
  password: '',
  confirm_password: '',
};

const SignUpPage = () => {
  const [formData, setFormData] = useState(initialFormData);

  // Form States
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const navigate = useNavigate();

  const handleFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formLoading || formError) {
      setFormLoading(false);
      setFormError(false);
    }

    setFormData((form_data) => {
      return { ...form_data, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      if (formData.password !== formData.confirm_password) {
        throw new Error('Passwords do not match!');
      }

      // Clean Data before sending
      const cleanedData = {
        full_name: formData.full_name.trim(),
        email: formData.email.toLowerCase(),
        date_of_birth: formData.date_of_birth,
        blood_group: formData.blood_group!.trim(),
        genotype: formData.genotype?.trim(),
        gender: formData.gender,
        phone_number: formData.phone_number,
        password: formData.password.trim(),
      };
      // on Success
      const response = await fetch('/api/auth/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });

      if (response.status === 500) throw new Error('Connection Error. 🫠');

      if (response.ok) {
        setFormLoading(false);
        notifySuccess('Registration Successful! 😊');
        navigate('/sign-in');

        return;
      }
      throw new Error(
        'An Error occured with Registration. Credentials might already exist'
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: { message: string } | any) {
      setFormLoading(false);
      setFormError(true);
      notifyError(error.message);
    }
    // Perform Form Submission Action
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg_services.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-full w-full flex justify-center items-center"
    >
      <div className="bg-white p-5 sm:p-8 my-10 md:p-10 rounded-2xl shadow-2xl shadow-gray-400 w-[90%] max-w-[500px] animate-fade-in">
        {/* Define Form input here */}
        <form
          method="post"
          onSubmit={handleFormSubmit}
          className="text-sm xs:text-base"
        >
          {/* Form Header */}
          <h1 className="text-2xl mb-3 md:text-3xl text-center font-black text-primary-blue">
            Register An Account to Use our Full Features
          </h1>
          <p className="text-xs sm:text-sm text-center text-slate-700 mb-7">
            Book Appointments, store chat history and enjoy convenience.
          </p>
          <hr className="mb-3" />
          <input
            name="full_name"
            placeholder="Enter Your Full Name"
            required
            value={formData.full_name}
            className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            minLength={8}
            maxLength={30}
            onChange={handleFormValueChange}
          />

          <input
            name="email"
            placeholder="Enter Email Address"
            type="email"
            required
            value={formData.email}
            className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            minLength={8}
            onChange={handleFormValueChange}
          />

          <input
            name="phone_number"
            placeholder="Enter Phone Number (081234...)"
            type="string"
            required
            value={formData.phone_number}
            className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            minLength={11}
            maxLength={11}
            onChange={handleFormValueChange}
          />

          <label
            htmlFor="date_birth"
            className="text-slate-500 ml-2 mb-2 text-sm"
          >
            Date of Birth
          </label>
          <input
            name="date_of_birth"
            id="date_birth"
            placeholder="Date of Birth"
            type="date"
            required
            min="1914-01-01"
            max="2007-12-31"
            value={formData.date_of_birth}
            className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            onChange={handleFormValueChange}
          />

          <fieldset className="mb-4 border-2 rounded-lg  text-slate-800 ">
            <legend className=" font-medium p-3">Gender</legend>
            <div className="mb-3 p-1 flex gap-5">
              <label className="flex gap-2 ml-5">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleFormValueChange}
                  className="w-5 "
                />
                Male
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleFormValueChange}
                  className="w-5 "
                />
                Female
              </label>
            </div>
          </fieldset>

          <input
            name="password"
            placeholder="Use a Secured Password"
            type="password"
            required
            value={formData.password}
            className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            minLength={8}
            maxLength={30}
            onChange={handleFormValueChange}
          />
          <input
            name="confirm_password"
            placeholder="Confirm Your Password"
            type="password"
            required
            value={formData.confirm_password}
            className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
            minLength={8}
            maxLength={30}
            onChange={handleFormValueChange}
          />

          <fieldset className="mb-4 border-2 rounded-lg  text-slate-800  px-4">
            <legend className=" font-medium p-1">Optional Fields</legend>
            <div className="mt-2 flex gap-3">
              <input
                name="blood_group"
                placeholder="Blood Group?"
                value={formData.blood_group}
                minLength={1}
                maxLength={4}
                onChange={handleFormValueChange}
                className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
              />

              <input
                name="genotype"
                placeholder="Genotype?"
                value={formData.genotype}
                minLength={1}
                maxLength={4}
                onChange={handleFormValueChange}
                className="w-full p-3 outline-none  valid:bg-secondary-green rounded-lg mb-3 border-[1px] text-slate-800"
              />
            </div>
          </fieldset>

          <button
            disabled={formLoading}
            className={`${
              formLoading ? 'animate-pulse' : ''
            } w-full p-4 bg-primary-green rounded-xl text-white font-extrabold uppercase hover:bg-opacity-65 cursor-pointer transition ease-in duration-300 disabled:cursor-not-allowed`}
          >
            {formLoading ? (
              <p>Registration in Progress </p>
            ) : (
              <p>Sign Up Now</p>
            )}
          </button>

          <Link to={'/sign-in'}>
            <p className="text-sm text-center text-primary-blue mt-4">
              Already have an account? Sign In Here
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
