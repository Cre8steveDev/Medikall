// Main App Where everything comes together
// Define the App Router Here

import { Routes, Route } from 'react-router-dom';
import GeneralLayout from './views/GeneralLayout';
import Home from './views/HomePage';
import DepartmentsPage from './views/DepartmentsPage';
import DepartmentInfoPage from './views/DepartmentInfoPage';

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

          {/* End of Nested Routes */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
