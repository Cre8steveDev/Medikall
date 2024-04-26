import BrowseByCategories from '../ui/BrowseByCategories';
import HeroSection from '../ui/HeroSection';
import OurServiceOfferings from '../ui/OurServiceOfferings';

// Define Home View on load
const HomePage = () => {
  return (
    <section className="w-full">
      <HeroSection />
      <OurServiceOfferings />
      <BrowseByCategories />
    </section>
  );
};

export default HomePage;
