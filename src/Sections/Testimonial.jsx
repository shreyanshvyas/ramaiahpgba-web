import { FaLinkedin } from "react-icons/fa";
import Title from "../Components/Title"
import rahul from "../assets/img/rahul.jfif"
import shreya from "../assets/img/shreya.png"
import onkar from "../assets/img/onkar.png"

const Testimonial = () => {

    const testimonialData = [
        {
            "img": shreya,
            "name": "Shreya Shukla",
            "title" : "PGDM (Finance & Marketing), 2019-21 | Placed @ Grant Thornton",
            "desc": "Ramaiah institute of Management has helped me grow by imparting me with theoretical as well as practical knowledge. I would like to appreciate the placement department for the efforts they made for providing ample opportunities for students in getting placed in a reputed company."
        },
        {
            "img": rahul,
            "name": "Venkat Sai Rahul",
            "title": "PGDM 2022-2024",
            "desc": "Ramaiah Institute of Management (MSRIM) in Bangalore, India, is known for its strong networking opportunities. The college has a vast alumni network and often hosts industry events, seminars, and workshops where students can connect with professionals. Additionally, RIM offers internships and placement opportunities with reputed companies, further enhancing networking prospects for students. However, the effectiveness of networking also depends on individual initiative and engagement with the available opportunities."
        },
        {
            "img": onkar,
            "name": "Onkar Sambhaji Chougule",
            "title": "PGDM (Operations & Marketing), 2019-21 | Placed @ ZopSmart",
            "desc": "There are many PGDM institutes in Bangalore, but RIM's PGDM program stands out for its uniqueness. I got the skills and confidence to intelligently use a number of quantitative and qualitative methodologies as a PGDM student. I treasure the memories with Director Dr. Manasa Nagabhushanam ma'am, renowned faculty members and loyal friends. The placement department has provided me a platform to strengthen and demonstrate my talents which led to my placement at ZopSmart. Thank you RIM for helping me shape my career."
        }
    ]

    return (
        <section className="md:py-[50px] pt-0 pb-10">
            <div className="container mx-auto px-3 md:px-10">
                <div className="mb-[50px]">
                    <Title name="Student" colored="Testimonials"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5">
                    {
                        testimonialData.map((testimoni, index) => (
                            <div className="border md:p-7 p-4 rounded-xl bg-white relative testimonial-card" key={index}>
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="max-w-[60px]">
                                        <img src={testimoni.img} alt="client" className="max-w-[60px] rounded-[50px]"/>
                                    </div>
                                
                                    <div>
                                        <h3 className="text-navy text-[18px] font-flama font-bold mb-1">{testimoni.name}</h3>
                                        <span className="text-[14px] font-flama">{testimoni.title}</span>
                                    </div>
                                </div>
                                <p className="text-navy">{testimoni.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;