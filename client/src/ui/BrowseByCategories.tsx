import { maxWidthClassSettings } from '../lib/constants';
import { BrowseCategories } from '../lib/constants';
import CategoriesCarousel from './CategoriesCarousel';

// Service Offering Section

const BrowseByCategories = () => {
  // Handle Return of JSX
  return (
    <section
      className="w-full min-h-[600px] flex flex-col items-center justify-center"
      id="categories"
    >
      <div
        className={`${maxWidthClassSettings} flex flex-col gap-2 items-center justify-center h-full md:h-full overflow-x-hidden overflow-y-scroll`}
      >
        <h2 className="text-4xl font-bold text-primary-green mt-[100px] sm:mt-0 text-center">
          Browse by Category or Department
        </h2>
        <p className="text-slate-700 text-center px-6 py-2 md:text-lg">
          Got a recommendation from MediDoc on which of the departments to Book
          an appointment with? Select one of the following Departments to Book
          an appointment with a Qualified Medical Personnel
        </p>
        <div className="w-full ">
          <CategoriesCarousel itemsArray={BrowseCategories} />
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategories;
