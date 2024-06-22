import Title from "../Components/Title"
import icon1 from "../assets/img/program/1.png"
import icon2 from "../assets/img/program/2.png"
import icon3 from "../assets/img/program/3.png"
import icon4 from "../assets/img/program/4.png"
import icon5 from "../assets/img/program/5.png"

const Program = () => {

    const  programData = [
        {
            "icon": icon1,
            "title": "Comprehensive Curriculum",
            "desc": "Traverse from the foundations to the future of digital marketing, including AI technologies like ChatGPT."
        },
        {
            "icon": icon2,
            "title": "Real-Time Analytics Training",
            "desc": "Learn to interpret market trends with real-time data analytics, enabling data driven decision-making."
        },
        {
            "icon": icon3,
            "title": "Specialized Skill Development",
            "desc": "Dive deep into SEO, Social Media, Email Marketing, and more, with hands-on projects for practical powers."
        },
        {
            "icon": icon2,
            "title": "Ethical Marketing Practices",
            "desc": "Understand the significance of ethics in digital marketing, ensuring integrity in your campaigns."
        },
        {
            "icon": icon4,
            "title": "Capstone Project",
            "desc": "Culminate your learning in a real-world project that showcases your industry-ready skills."
        },
        {
            "icon": icon5,
            "title": "E-commerce & Marketplaces",
            "desc": "Explore the mechanics of digital marketplaces, learning to maximize e-commerce strategies.."
        }
    ];

    return (
        <section className="pt-[50px] pb-[70px]" id="program">
            <div className="container mx-auto px-3 md:px-10">
                <div className="mb-[50px]">
                    <Title name="Highlights of" colored="Program"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-8 gap-8">
                    {
                        programData.map((singleData,index)=>(
                            <div className="text-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-8 md:py-8 md:px-2 rounded-2xl" key={index}>
                                <div className="h-[60px]">
                                    <img src={singleData.icon} alt="icon" className="max-w-[50px] mx-auto"/>
                                </div>
                                <h3 className="my-4 text-navy text-[20px] font-bold">{singleData.title}</h3>
                                <p className="text-navy">{singleData.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Program;