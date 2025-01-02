import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/img/logo.png"
import Button from '../Components/Button'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


const navigation = [
  { name: 'Overview', href: '/#banner', id: 'banner' },
  { name: 'Skills', href: '/#skill', id: 'skill' },
  { name: 'About KPMG', href: '/#kpmg', id: 'kpmg' },
  { name: 'Faculty', href: '/#faculty', id: 'faculty' },
  { name: 'About RAMAIAH', href: '/#ramaiah', id: 'ramaiah' },
  { name: 'Program', href: '/#program', id: 'program' },
  { name: 'Courses', href: '/#course', id: 'course' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const location = useLocation();
    const [currentSection, setCurrentSection] = useState('');

    // Inside useEffect, modify handleScroll function

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollPosition = window.scrollY;
  
    //     for (let i = 0; i < navigation.length; i++) {
    //       const section = navigation[i];
    //       const sectionElement = document.querySelector(section.href);
    //       if (sectionElement && sectionElement.offsetTop <= scrollPosition + 100) {
    //         setCurrentSection(section.id);
    //       }
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <Disclosure as="nav" className="shadow-xl bg-white py-4 fixed top-0 left-0 right-0 z-[999]">
      {({ open }) => (
        <>
          <div className="container mx-auto md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 <a href="#">
                  <img
                      className="max-w-[180px] sm:ml-0 ml-6"
                      src={logo}
                      alt="Ramaiah"
                    />
                 </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                  {navigation.map((item) => (
                      <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        currentSection === item.id
                          ? 'bg-[#FFF1F1] border-b-2 border-orange'
                          : 'text-gray-300 hover:bg-gray-700',
                        'lg:px-2 md:px-1 py-3 text-sm font-medium font-flama'
                      )}
                    >
                      {item.name}
                    </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md pr-4 pb-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-navy" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-navy" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <div className='lg:block hidden'>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-5">
                  <Button text="Apply Now"/>
                  <Button text="Download Brochure" secondary={true}/>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#FFF1F1]' : 'text-gray-300 hover:bg-gray-700',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    );
};

export default Navbar;