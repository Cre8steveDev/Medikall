import BrowseByCategories from '../ui/BrowseByCategories';
import HeroSection from '../ui/HeroSection';
import OurServiceOfferings from '../ui/OurServiceOfferings';
import AboutUsSection from '../ui/AboutUsSection';

// Define Home View on load
const HomePage = () => {
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
