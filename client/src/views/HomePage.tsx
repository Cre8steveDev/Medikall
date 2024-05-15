import BrowseByCategories from '../ui/BrowseByCategories';
import HeroSection from '../ui/HeroSection';
import OurServiceOfferings from '../ui/OurServiceOfferings';
import AboutUsSection from '../ui/AboutUsSection';

/**
 * The Home Page Component that renders
 * Components required on the home screen of the app
 * @returns {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  return (
    <section className="w-full">
      <HeroSection />
      <OurServiceOfferings />
      <BrowseByCategories />
      <AboutUsSection />
    </section>
  );
};

export default HomePage;
