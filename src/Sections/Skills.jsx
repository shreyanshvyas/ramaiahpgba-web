import Title from "../Components/Title"
import Slider from "react-slick";
import excel from "../assets/img/skills/excel.png";
import r from "../assets/img/skills/r.png";
import mysql from "../assets/img/skills/mysql.png";
import python from "../assets/img/skills/python.png";
import power from "../assets/img/skills/power.png";
import tab from "../assets/img/skills/tab.png";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft  } from "react-icons/md";

const Skills = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        nextArrow: <MdOutlineKeyboardDoubleArrowRight />,
        prevArrow: <MdOutlineKeyboardDoubleArrowLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section className="bg-[#FAFAFA] md:py-[50px] lg:py-[70px] py-[40px] skills-section" id="skill">
            <div className="container mx-auto px-3 md:px-10">
                <div className="mb-6 md:mb-8">
                    <Title name="The Most in" colored=" Demand Skills"/>
                </div>

                <Slider {...settings}>
                    <div>
                        <div className="h-[80px] bg-white w-[80px] flex justify-center items-center rounded-lg">
                            <img src={excel} alt="excel" className="max-w-[50px] m-auto"/>
                        </div>
                    </div>
                    <div>
                        <div className="h-[80px] bg-white w-[80px] flex justify-center items-center rounded-lg">
                            <img src={r} alt="r" className="max-w-[50px] m-auto"/>
                        </div>
                    </div>
                    <div>
                        <div className="h-[80px] bg-white w-[80px] flex justify-center items-center rounded-lg">
                            <img src={mysql} alt="r" className="max-w-[50px] m-auto"/>
                        </div>
                    </div>
                    <div>
                        <div className="h-[80px] bg-white w-[80px] flex justify-center items-center rounded-lg">
                            <img src={python} alt="r" className="max-w-[50px] m-auto"/>
                        </div>
                    </div>
                    <div>
                        <div className="h-[80px] bg-white w-[80px] flex justify-center items-center rounded-lg">
                            <img src={power} alt="r" className="max-w-[50px] m-auto"/>
                        </div>
                    </div>
                    <div>
                        <div className="h-[80px] bg-white w-[80px] flex justify-center items-center rounded-lg">
                            <img src={tab} alt="r" className="max-w-[50px] m-auto"/>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Skills;