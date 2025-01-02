import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";
import map from "../assets/img/map.png"
import logo from "../assets/img/logo2.png"

const Footer = () => {
    return (
        <section className="py-[50px] bg-navy">
            <div className="container mx-auto px-3 md:px-10">
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-5 sm:gap-0">
                    <div className="lg:col-span-2 md:col-span-1">
                        <img src={logo} alt="logo" loading="lazy" className="max-w-[220px]"/>
                        <p className="text-white mt-5 max-w-[400px] text-[15px]">A world-class management education institution with a right blend of a contextually relevant curriculum, innovative pedagogy and transparent assessment.</p>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1">
                        <h3 className="text-[18px] text-white font-bold mb-2 md:mb-5">Get in touch</h3>
                        <a href="#" className="text-white flex items-center gap-2 mb-4">
                            <IoMail className="text-[#0066CC] text-[20px]"/>
                            admissions@msrim.org
                        </a>

                        <ul className="flex text-white gap-3">
                            <li className="bg-[#0066CC] w-[30px] h-[30px] leading-[33px] rounded-2xl text-center">
                                <a href="#" className="inline-block"><FaLinkedin/></a>
                            </li>
                            <li className="bg-[#0066CC] w-[30px] h-[30px] leading-[33px] rounded-2xl text-center">
                                <a href="#" className="inline-block"><FaFacebook/></a>
                            </li>
                            <li className="bg-[#0066CC] w-[30px] h-[30px] leading-[33px] rounded-2xl text-center">
                                <a href="#" className="inline-block"><FaInstagram/></a>
                            </li>
                            <li className="bg-[#0066CC] w-[30px] h-[30px] leading-[33px] rounded-2xl text-center">
                                <a href="#" className="inline-block"><FaYoutube/></a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1">
                        <h3 className="text-[18px] text-white font-bold mb-5">Reach Us</h3>
                        <a href="#">
                            <img src={map} alt="map" loading="lazy" className="rounded-lg" />
                        </a>
                    </div>
                </div>

                <div className="border-b border-[#FFFFFF2B] py-[20px]"></div>

                <div className="flex justify-between items-center pt-[20px]">
                    <p className="text-white text-[13px]">Copyright © 2023 MSRIM, All rights reserved. Powered by InsideOut</p>

                    <ul className="font-flama">
                        <li className="inline-block text-white md:border-r border-[#FFFFFF2B] px-2 text-[13px]"><a href="#">Terms of use</a></li>
                        <li className="inline-block text-white px-2 text-[13px]"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;