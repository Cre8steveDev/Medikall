import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GeneralLayout = () => {
  return (
    <div>
      {/* Let's have our Header here!!!  */}
      <Header />

      {/* Render the nested elements here  */}
      <Outlet />

      {/* Place Footer Component Here  */}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
