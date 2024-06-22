import Title from "../Components/Title"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { RiShieldStarFill } from "react-icons/ri"
import { FaBook } from "react-icons/fa"
import { Disclosure } from '@headlessui/react'
import { FaSortDown, FaCheckCircle } from "react-icons/fa"
import iconExcel from "../assets/img/skills/excel.png"
import iconR from "../assets/img/skills/r.png"
import iconPython from "../assets/img/skills/python.png"
import iconMysql from "../assets/img/skills/mysql.png"
import iconTab from "../assets/img/skills/tab.png"
import iconPower from "../assets/img/skills/power.png"

const Curriculum = () => {
    return (
        <section className="bg-[#FAFAFA] md:py-[70px] py-[50px]" id="course">
            <div className="container mx-auto px-3 md:px-10">

                <div className="mt-6 curriculum-section">
                    <Tabs>
                        <div className="grid lg:grid-cols-12 grid-cols-1">
                            <div className="col-span-3">
                                <div className='rounded-tr-2xl rounded-br-2xl bg-darkBlue'>
                                    <TabList className="flex flex-col justify-center items-center">
                                        <Tab className="w-full border border-transparent cursor-pointer">
                                            <div className="p-[16px]">
                                                <p className='text-navy text-[18px] font-medium'>Trimester 1</p>
                                            </div>
                                        </Tab>
                                        <Tab className="w-full border border-transparent cursor-pointer">
                                            <div className="p-[16px]">
                                                <p className='text-navy text-[18px] font-medium'>Trimester 2</p>
                                            </div>
                                        </Tab>
                                        <Tab className="w-full border border-transparent cursor-pointer">
                                            <div className="p-[16px]">
                                                <p className='text-navy text-[18px] font-medium'>Trimester 3</p>
                                            </div>
                                        </Tab>
                                        <Tab className="w-full border border-transparent cursor-pointer">
                                            <div className="p-[16px]">
                                                <p className='text-navy text-[18px] font-medium'>Trimester 4</p>
                                            </div>
                                        </Tab>
                                    </TabList>
                                </div>
                            </div>

                            <div className="col-span-9 lg:px-10 md:px-0 px-0 mt-5 md:mt-8 lg:mt-0">
                                <TabPanel>
                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mb-2'>
                                        Module
                                    </h2>
                                    <ul className="list-disc pl-[35px] text-navy">
                                        <li>Spreadsheet data modelling.</li>
                                        <li>Statistics for business managers.</li>
                                        <li>Business analytics using R & Python.</li>
                                    </ul>

                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mt-[30px] mb-[15px]'>
                                        Tools
                                    </h2>

                                    <div className="grid grid-cols-3 gap-2 items-center max-w-[300px]">
                                        <img src={iconExcel} alt="excel" className="max-w-[60px]"/>
                                        <img src={iconR} alt="r"  className="max-w-[60px]"/>
                                        <img src={iconPython} alt="python"  className="max-w-[60px]"/>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mb-2'>
                                        Module
                                    </h2>
                                    <ul className="list-disc pl-[35px] text-navy">
                                        <li>Database management using SQL.</li>
                                        <li>Art of story telling using visualization.</li>
                                    </ul>

                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mt-[30px] mb-[15px]'>
                                        Tools
                                    </h2>

                                    <div className="grid grid-cols-3 gap-2 items-center max-w-[300px]">
                                        <img src={iconMysql} alt="mysql" className="max-w-[60px]"/>
                                        <img src={iconTab} alt="tab"  className="max-w-[60px]"/>
                                        <img src={iconPower} alt="power"  className="max-w-[60px]"/>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mb-2'>
                                        Module
                                    </h2>
                                    <ul className="list-disc pl-[35px] text-navy">
                                        <li>Database management using SQL.</li>
                                        <li>Art of story telling using visualization.</li>
                                    </ul>

                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mt-[30px] mb-[15px]'>
                                        Tools
                                    </h2>

                                    <div className="grid grid-cols-3 gap-2 items-center max-w-[300px]">
                                        <img src={iconExcel} alt="excel" className="max-w-[60px]"/>
                                        <img src={iconPython} alt="python "  className="max-w-[60px]"/>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mb-2'>
                                        Module
                                    </h2>
                                    <ul className="list-disc pl-[35px] text-navy">
                                        <li>Marketing & Retail Analytics.</li>
                                        <li>HR & Finance Analytics.</li>
                                    </ul>

                                    <h2 className='lg:text-[25px] text-[20px] font-flama font-medium text-navy mt-[30px] mb-[15px]'>
                                        Tools
                                    </h2>

                                    <div className="grid grid-cols-3 gap-2 items-center max-w-[300px]">
                                        <img src={iconExcel} alt="excel" className="max-w-[60px]"/>
                                        <img src={iconPython} alt="python "  className="max-w-[60px]"/>
                                    </div>
                                </TabPanel>
                            </div>
                        </div>    
                    </Tabs>             
                </div>
            </div>
        </section>
    );
};

export default Curriculum;