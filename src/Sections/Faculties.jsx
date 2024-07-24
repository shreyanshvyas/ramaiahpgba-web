import Title from "../Components/Title"
import rajnish_virmani from "../assets/img/faculty/rajnish_virmani.png"
import bharat from "../assets/img/faculty/bharat.png"
import varsha from "../assets/img/faculty/varsha.png"
import pranab from "../assets/img/faculty/pranab.png"
import kaushwik from "../assets/img/faculty/kaushik.png"
import aravinda from "../assets/img/faculty/aravinda.png"
import Modal from "https://cdn.skypack.dev/react-modal@3.16.1";
import { useState } from "react"

const Faculties = () => {

    const customStyles = {
            content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width:'80%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: "none",
            backgroundColor: "#000000"
        },
      };

    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(faculty) {
        setSelectedFaculty(faculty);
        setIsOpen(true);
      }

    function closeModal() {
        setIsOpen(false);
    }

    const facultyInfo = [
        {
            "name": "Lijin",
            "img": rajnish_virmani,
            "title": "Senior Consultant, KPMG in India",
            "shortDesc": "Lijin holds a postgraduate qualification in marketing with 11 years of extensive work experience. With significant contributions  to notable projects at RBS, RCMAS, Christ, and MIT,",
            "desc":"Lijin holds a postgraduate qualification in marketing with 11 years of extensive work experience. With significant contributions to notable projects at RBS, RCMAS, Christ, and MIT, Lijin specialzes in teaching Advanced Excel, Visulaization using Power BI and Tableau, and HR Analytics. Proficient in tools like Excel, SPSS, Orange 3, Tableau, and Power BI, Lijin has shared expertise across various locaitns including Kochi, Noida, Chennai, Coimbatore, and Bangalore."
        },
        {
            "name": "Bharat Sharma",
            "img": bharat,
            "title": "Consultant, KPMG in India",
            "shortDesc": "Bharat holds a degree in Physics (H) along with Lean Six Sigma Green Belt certification. With a years of experience in Six Sigma Consulting and analytics automation, Bharat",
            "desc": "Bharat is a Physics (H) graduate and Lean Six Sigma Green Belt certified professional. With expertise in Six Sigma consulting and analytics automation, Bharat has led process optimization projects at EIL and implemented analytics capability chains at GATI using Python. He also teaches courses in Data Visualization, Machine Learning, and HR Analytics, oering training programs that bring a global perspective from his experience in India and Bahrain (GCC). Elevate your skills with Bharat's courses."
        },
        {
            "name": "Varsha Pai K.",
            "img": varsha,
            "title": "Senior Consultant, KPMG in India",
            "shortDesc": "Varsha brings nine years of experience in training and operatin, specializing in E-Learning and Training-Project Management. With a BE in Information Science and CSM certification, Varsha excels in.",
            "desc" : "Varsha has nine years of experience in training & operations, specializing in E-Learning and Training-Project Management. She holds a BE in Information Science and CSM certification, excelling in Data Visualization, Excel Modeling, and Strategy Analysis. Varsha's expertise includes designing and implementing engaging training programs, applying Adult Learning Theory, and ensuring effective learning experiences."
        },
        {
            "name": "Pranab H. Das",
            "img": pranab,
            "title": "Consultant, KPMG in India",
            "shortDesc": "Pranab holds a B.Tech and MBA qualification 3.5 years of experience. He has contributed to marquee projects at MDI Gurgaon, IIFT Delhi, and Christ University. Pranab",
            "desc" : "Pranab is a Btech and MBA graduate with 3.5 years of experience, contributing to projects at MDI Gurgaon, IIFT Delhi, and Christ University. With extensive teaching and consulting experience across PAN India, including cities like Bangalore, Kolkata, Noida, Kochi, Delhi, and Gurgaon, Pranab teaches courses like AIML, BIGDATA, Python, ML, Advanced Excel, Database Management, and Data Visualization. "
        },
        {
            "name": "Kaushik Swaroop",
            "img": kaushwik,
            "title": "Consultant, KPMG in India",
            "shortDesc": "Kaushik holds a B.E. in Electrical and Electronics Engineering and a PGDM in Business Analytics and Finance. With 3.5 years of experience, he has led projects at top",
            "desc" : "Kaushik is a highly skilled professional with a B.E in Electrical and Electronics Engineering and a PGDM in Business Analytics and Finance. With 3.5 years of experience, he has led projects at prestigious institutions such as IIM Rohtak, BITS Pilani, IIM Kashipur, IIFT Delhi, Christ University, and KPMG UK. He teaches courses like Artificial Intelligence & Financial Modelling, having taught across India, as well as internationally in the Netherlands & the UK."
        },
        {
            "name": "Dr. Aravinda Reddy M.N",
            "img": aravinda,
            "title": "Associate Professor at Ramaiah Institute of Management",
            "shortDesc": "Dr. Aravinda Reddy M N is an Associate Professor and HOD - Business Analytics and Data Science at Ramaiah Institute of Management, Bangalore. He has completed Read more.",
            "desc" : "With over 22 years in academia and qualifications like MBA, MSc, MPhil, Dr Reddy is a seasoned professor of Business Analytics & Data Science.He holds a PhD in 'E-Business and its Impact on Retail Sector Area,' recognized as a 'Distinguished Thesis' at an international conference. His research focuses on Business Analytics and Data Science, with applications spanning Management Information Systems, E-Commerce, and Mobile Commerce. Dr. Reddy has published in top international journals and presented at prestigious conferences. Dr. Reddy teaches courses like Management Information Systems, Business Analytics, & Artificial Intelligence, "
        }
    ]

    return (
        <section className="md:py-[60px] lg:py-[80px] py-[50px] bg-[#FAFAFA]" id="faculty">
            <div className="container mx-auto px-3 md:px-10">
                <div className="mb-[50px]">
                    <Title name="Experiences" colored="Faculties"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
                    {
                        facultyInfo.map((singleFaculty,index)=> (
                                <>
                                    <div className="relative" key={index}>
                                    <div className="w-full h-full bg-orange absolute  z-0 rounded-lg -right-3 -bottom-3"></div>
                                    <div className="flex flex-col lg:flex-row border rounded-lg border-navy p-5 bg-white z-1 relative">
                                        <div className="lg:mr-5 max-w-[320px] mx-auto mb-5">
                                            <img src={singleFaculty.img} alt="rajnish virmani" className="max-w-[200px]" loading="lazy"/>
                                        </div>
                                        <div className="text-navy">
                                            <h3 className="text-[20px] mb-1 font-bold font-flama">{singleFaculty.name}</h3>
                                            <span className="text-[14px] mb-2 inline-block font-flama">{singleFaculty.title}</span>
                                            <p>{singleFaculty.shortDesc}<button onClick={() => openModal(singleFaculty)}className="font-bold text-orange">Read More</button></p>
                                        </div>
                                    </div>
                                </div>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div>
                                    <div className="relative max-w-[700px] mx-auto">
                                        <div className="w-full h-full bg-orange absolute  z-0 rounded-lg -right-3 -bottom-3"></div>
                                            <div className="flex flex-col lg:flex-row border rounded-lg border-navy p-5 bg-white z-1 relative">
                                                <button onClick={closeModal} className="absolute right-5 text-orange font-bolder text-2xl">X</button>
                                                <div className="lg:mr-5 max-w-[320px] mx-auto mb-5">
                                                    <img src={selectedFaculty ? selectedFaculty.img : ""} alt={selectedFaculty ? selectedFaculty.name : ""} className="max-w-[200px]" loading="lazy"/>
                                                </div>
                                                <div className="text-navy">
                                                    <h3 className="text-[20px] mb-1 font-bold font-flama">
                                                        {selectedFaculty ? selectedFaculty.name : ""}
                                                    </h3>
                                                    <span className="text-[14px] mb-2 inline-block font-flama">
                                                        {selectedFaculty ? selectedFaculty.title : ""}
                                                    </span>
                                                    <p>{selectedFaculty ? selectedFaculty.desc : ""}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </>
                        ))
                    }
                    
                </div>

                {/* <button onClick={openModal} className="bg-white px-4 py-3 rounded border-2 shadow-md shadow-red-600 hover:bg-gray-200">Open Modal</button> */}
               
            </div>
        </section>
    );
};

export default Faculties;