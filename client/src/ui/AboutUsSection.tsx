import { maxWidthClassSettings } from '../lib/constants';

// Home Page - About Us Section

const AboutUsSection = () => {
  // Handle Return of JSX
  return (
    <section
      className="w-full md:h-[calc(100vh-300px)] bg-slate-100"
      id="services"
    >
      <div
        className={`${maxWidthClassSettings} flex flex-col-reverse md:flex-row gap-2 items-center justify-center h-full overflow-x-hidden overflow-y-scroll`}
      >
        <div className="w-full p-5">
          <h4 className="text-lg text-primary-blue border-l-4 border-primary-blue pl-4 mb-2">
            Who We Are
          </h4>
          <h2 className="lg:text-5xl font-bold text-primary-blue mb-2">
            About Our Company
          </h2>
          <h3 className="text-2xl text-primary-blue mb-2">SINCE 2024</h3>

          <p className="pr-3 text-justify mb-5 text-slate-700 sm:text-base text-xs">
            Medikall is a revolutionary web app designed to streamline the
            healthcare experience for both patients and doctors. Our
            user-friendly platform allows you to conveniently book appointments
            with qualified doctors from the comfort of your home.
          </p>
          <p className="pr-3 text-justify mb-5 text-slate-700 sm:text-base text-xs">
            We understand the importance of efficient communication and
            preparation for consultations. That's why Medikall incorporates a
            smart chatbot that guides you through a series of preliminary
            questions. These questions are designed to gather a clear
            understanding of your medical history and current concerns. This
            information is then securely forwarded to your chosen doctor,
            allowing them to review your case beforehand and prepare for a more
            focused and productive consultation.
          </p>

          <p className="text-2xl italic font-bold text-primary-blue">
            Stephen Omoregie
          </p>
          <p className="italic text-sm">Fullstack Web Developer/ALX Student</p>
        </div>

        <div className="w-full grid gap-2 grid-cols-2 grid-rows-2 cursor-default p- relative">
          <img
            src="/images/telemedicine.jpg"
            alt="About Us"
            className="hover:scale-[130%] transition ease-in-out duration-300 rounded-2xl hover:translate-x-[30%] hover:translate-y-[30%] hover:z-20"
          />
          <img
            src="/images/fertility-clinic.jpg"
            alt="About Us"
            className="hover:scale-[130%] transition ease-in-out duration-300 rounded-2xl hover:-translate-x-[30%] hover:translate-y-[30%] scale-[85%] hover:z-20"
          />

          <img
            src="/images/nurses.jpg"
            alt="About Us"
            className="hover:scale-[130%] transition ease-in-out duration-300 rounded-2xl hover:translate-x-[30%] hover:-translate-y-[30%] scale-[85%] hover:z-20"
          />
          <img
            src="/images/hospice-care.jpg"
            alt="About Us"
            className="hover:scale-[130%] transition ease-in-out duration-300 rounded-2xl hover:-translate-x-[30%] hover:-translate-y-[30%] hover:z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
