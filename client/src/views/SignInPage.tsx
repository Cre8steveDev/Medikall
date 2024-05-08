// Implement the SignIn Page
// Consider using Social Logins Too
import { useEffect, useState } from 'react';
import { notifyError, notifySuccess } from '../ui/notifications';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../redux/slice/userSlice';
import { TUserContext } from '../types/generalTypes';

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
  const user: TUserContext | null = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state?.user?.current
  );

  const [formData, setFormData] = useState(initialFormData);
  // Form States
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/');
      return;
    }
  }, [navigate, user]);

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
      // Clean Data before sending
      const cleanedData = {
        email: formData.email.toLowerCase(),
        date_of_birth: formData.date_of_birth,
        password: formData.password.trim(),
      };

      const response = await fetch('/api/auth/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });
      if (response.status === 500) throw new Error('Connection Error. 🫠');
      if (!response.ok) throw new Error('Invalid Login Details');
      // on Success
      const data = await response.json();
      dispatch(signInSuccess(data));

      setFormLoading(false);
      notifySuccess('Login Successful! 😊');
      navigate('/');
      return null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: { message: string } | any) {
      setFormLoading(false);
      setFormError(true);
      notifyError(error.message);
    }
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
      <div className="bg-white p-5 my-10 md:p-10 rounded-2xl shadow-2xl shadow-gray-400 w-[90%] max-w-[500px] animate-fade-in">
        {/* Define Form input here */}
        <form
          method="post"
          onSubmit={handleFormSubmit}
          className="text-sm xs:text-base"
        >
          {/* Form Header */}
          <h1 className="text-2xl md:text-3xl text-center font-black text-primary-blue mb-3">
            Login To your Account
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
            className={`${
              formLoading ? 'animate-pulse' : ''
            } w-full p-4 bg-primary-green rounded-xl text-white font-extrabold uppercase hover:bg-opacity-65 cursor-pointer transition ease-in duration-300 disabled:cursor-not-allowed`}
          >
            {formLoading ? <p>Logging In...😃 </p> : <p>Log In</p>}
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
