import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";

const Button = ({text, secondary}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
      document.body.classList.add('overflow-y-hidden');
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      document.body.classList.remove('overflow-y-hidden');
    };
  
    // Close all modals when press ESC
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
    
    return (
        <>
            <button onClick={openModal} className={`w-full lg:w-auto font-flama bg-gradient-to-r from-[#942B5D] to-[#D2482C] text-white py-2 px-6 rounded-md ${secondary ? "color-orange bg-white bg-none !text-orange border flex items-center justify-center gap-2" : ""}`}>
                {text}
                {secondary ? <LuDownload /> : ""}
            </button>

            {isModalOpen && (
        <div id="modelConfirm" className="fixed top-20 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full">
          <button 
              onClick={closeModal} 
              className="absolute -right-3 -top-[5px] bg-red-600 text-white rounded-full w-16 h-10 text-4xl flex"
            >
              &times;
            </button>
            <div className="md:col-span-2 sm:mt-0">
              <iframe 
                aria-label="Registration Form" 
                style={{ width: '100%', height: '600px', border: '2px solid #ccc', borderRadius: '8px' }} 
                frameBorder="0" 
                src="https://forms.zohopublic.in/bedept/form/RegistrationForm2/formperma/7Xg1fSzA2UztlQegOewLLsNIc4LY9D0RT-HYk1SxRXY">
              </iframe>
            </div>
            
          </div>
        </div>
      )}
        </>
    );
};

export default Button;