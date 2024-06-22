import { PiStarFourFill } from "react-icons/pi";
import Button from "../Components/Button";
import kpmg from "../assets/img/kpmg.png";
import checkbox from "../assets/img/checkbox.png"

const Banner = () => {
    return (
        <section className="bg-[#FFF1F1] pt-[150px] pb-[50px]" id="banner">
            <div className="container mx-auto px-3 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-5 items-center md:gap-5">
                    <div className="md:col-span-3">
                        <div className="bg-[#DE3F0F1A] flex items-center gap-1 px-3 py-1 mb-3 rounded-2xl max-w-[230px]">
                            <PiStarFourFill className="text-orange"/>
                            <p className="text-[#DE3F0F] font-semibold text-[15px]">Exciting Announcement</p>
                        </div>
                       
                        <h2 className="text-2xl md:text-[25px] lg:text-[45px] mb-5 text-navy max-w-[700px] md:leading-[38px] lg:leading-[60px] leading-[1.25]">
                        Make the Right Business Decisions with our 1-Year <span className="font-bold text-orange">Post Graduate Program</span> in <span className="font-bold text-orange">Business Analytics</span>.
                        </h2>

                        <ul className="mb-5">
                            <li className="flex items-center gap-2 text-base md:text-md lg:text-lg mb-1 text-navy font-flama">
                                <img src={checkbox} alt="checkmark" className="max-w-[15px]"/>
                                <span>Designed keeping in mind needs of working professionals</span>.
                            </li>
                            <li className="flex items-center gap-2 text-base md:text-md lg:text-lg mb-1 text-navy font-flama">
                                <img src={checkbox} alt="checkmark" className="max-w-[15px]"/>   
                                <span>On-campus Classes during weekend</span>
                            </li>
                            <li className="flex items-center gap-2 text-base md:text-md lg:text-lg text-navy font-flama">
                                <img src={checkbox} alt="checkmark" className="max-w-[15px]"/>   
                                <span>Taught by Experts from KPMG India</span>
                            </li>
                        </ul>


                        <div className="inset-y-0 right-0 flex flex-col md:flex-row items-center pr-2 sm:static sm:inset-auto sm:pr-0 gap-2 md:gap-5 mb-5 max-w-[450px]">
                            <Button text="Apply Now"/>
                            <Button text="Download Brochure" secondary={true}/>
                        </div>

                        <div className="flex items-center">
                            <p className="text-[20px] text-navy">In association with</p>
                            <img src={kpmg} alt="KPMG" className="max-w-[70px] ml-3"/>
                        </div>
                    </div>
                    <div className="md:col-span-2 mt-7 sm:mt-0">
                        <iframe aria-label='Registration Form' style={{ width: '100%', height:'350px', border: '2px solid #ccc', borderRadius: '8px' }} frameBorder="0" src='https://forms.zohopublic.in/bedept/form/RegistrationForm2/formperma/7Xg1fSzA2UztlQegOewLLsNIc4LY9D0RT-HYk1SxRXY'>      
                        </iframe>
                       {/* <BannerForm/> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;