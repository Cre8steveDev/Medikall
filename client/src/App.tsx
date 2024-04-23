// Main App Where everything comes together
// Define the App Router Here

import { Routes, Route } from 'react-router-dom';
import GeneralLayout from './views/GeneralLayout';
import Home from './views/HomePage';
import DepartmentsPage from './views/DepartmentsPage';
import DepartmentInfoPage from './views/DepartmentInfoPage';
import SingleAppointmentDetailPage from './views/SingleAppointmentDetailPage';
import BookAppointmentPage from './views/BookAppointmentPage';
import MediDocChat from './views/MediDocChatPage';
import UserDashboard from './views/UserDashboard';
import AdminDashboard from './views/AdminDashboard';
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          {/* Define Nested Child Routes Here */}
          {/* The home Component and others per path */}
          <Route index element={<Home />} />

          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="departments/:name" element={<DepartmentInfoPage />} />

          <Route
            path="appointments/:appointmentId"
            element={<SingleAppointmentDetailPage />}
          />

          <Route path="book-appointment" element={<BookAppointmentPage />} />
          <Route path="medidoc-chat" element={<MediDocChat />} />
          <Route path="dashboard" element={<UserDashboard />} />

          <Route path="__admin-dashboard" element={<AdminDashboard />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />

          {/* End of Nested Routes */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
