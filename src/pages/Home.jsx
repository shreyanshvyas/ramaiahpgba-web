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

const Home = () => {
  useEffect(() => {
    // Track page view
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-11454303460");
  }, []);
  
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Kpmg />
      <Faculties />
      <Ramaiah />
      <Program />
      <Curriculum />
      <Schedule />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
