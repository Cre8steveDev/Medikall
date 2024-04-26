// Implement the SignIn Page
// Consider using Social Logins Too
import { useState } from 'react';
import { notifyError, notifySuccess } from '../ui/notifications';
import { Link, useNavigate } from 'react-router-dom';

type TSignInFormData = {
  email: string;
  date_of_birth: string;
  password: string;
};

const initialFormData: TSignInFormData = {
  email: '',
  date_of_birth: '',
  password: '',
};

const SignInPage = () => {
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

    console.log(formData);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      if (!formData.password) {
        throw new Error('Passwords do not match!');
      }
      // on Success
      setFormLoading(false);
      notifySuccess('Registration Successful! 😊');
      navigate('/login');

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
      <div className="bg-white p-5 my-10 md:p-10 rounded-2xl shadow-2xl shadow-gray-400 w-[90%] max-w-[500px]">
        {/* Define Form input here */}
        <form method="post" onSubmit={handleFormSubmit}>
          {/* Form Header */}
          <h1 className="text-2xl md:text-3xl text-center font-black text-primary-blue">
            Welcome Again. Login To your Account
          </h1>
          <p className="text-xs sm:text-sm text-center text-slate-700 mb-7">
            Book Appointments, access your dashboard and enjoy convenience.
          </p>
          <hr className="mb-3" />

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

          <button
            disabled={formLoading}
            className={`${formLoading ? 'animate-pulse' : ''}`.concat(
              'w-full p-4 bg-primary-green rounded-xl text-white font-extrabold uppercase hover:bg-opacity-65 cursor-pointer transition ease-in duration-300 disabled:cursor-not-allowed'
            )}
          >
            {formLoading ? <p>Logging In </p> : <p>Log In</p>}
          </button>
          <Link to={'/sign-up'}>
            <p className="text-sm text-center text-primary-blue mt-4">
              New User? Sign Up Here
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
