import Navbar from "../Shared/Navbar";
import Banner from "../Sections/Banner";
import Skills from "../Sections/Skills";
import Kpmg from "../Sections/Kpmg";
import Faculties from "../Sections/Faculties";
import Ramaiah from "../Sections/Ramaiah";
import Program from "../Sections/Program";
import Curriculum from "../Sections/Curriculum";
import Schedule from "../Sections/Schedule";
import Testimonial from "../Sections/Testimonial";
import Footer from "../Shared/Footer";
import { useEffect } from "react";
import CTA from "../Components/CTA";

const Home = () => {

  return (
    <div className="max-w-full overflow-hidden">
      <Navbar />
      <Banner />
      <CTA message="Enroll Now to Get Started." buttonText="Enroll Today" />
      <Skills />
      <Kpmg />
      <Faculties />
      <CTA message="Only a few seats left! Secure your spot now!" buttonText="Apply Now"  />
      <Ramaiah />
      <Program />
      <Curriculum />
      <CTA message="Want to know more about the program?" buttonText="Download Brochure" />
      {/* <Schedule /> */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
