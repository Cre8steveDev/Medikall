import { maxWidthClassSettings } from '../lib/constants';

// Home Page - About Us Section

const AboutUsSection = () => {
  // Handle Return of JSX
  return (
    <section
      className="w-full md:h-[calc(100vh-10px)] "
      id="services"
    >
      <div
        className={`${maxWidthClassSettings} flex flex-col-reverse md:flex-row gap-2 items-center justify-center h-full overflow-x-hidden overflow-y-scroll`}
      >
        <!-- Left Side of Screen with text-->
          <div>
            <h4>Who We Are</h4>
            <h2>About Our Company</h2>
            <h3>SINCE 2024</h3>

            <p>Medikall is a revolutionary web app designed to streamline the healthcare experience for both patients and doctors. Our user-friendly platform allows you to conveniently book appointments with qualified doctors in our network from the comfort of your home.</p>
            <p>We understand the importance of efficient communication and preparation for consultations. That's why Medikall incorporates a smart chatbot that guides you through a series of preliminary questions. These questions are designed to gather a clear understanding of your medical history and current concerns. This information is then securely forwarded to your chosen doctor, allowing them to review your case beforehand and prepare for a more focused and productive consultation.</p>

            <name>Stephen Omoregie</name>
            <p>Software Developer/ALX Student</p>
          </div>

           <!-- Right Side of Screen with Photo-->
          <div>
            <img src="/images/telemedicine.jpg" alt="About Us"/>
          </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
