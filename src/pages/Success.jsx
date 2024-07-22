import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Button from "../Components/Button";
import successBg from "../assets/img/ramaiah/5.jpg";
import DownloadButton from "../Components/DownloadButton";

const Success = () => {
  return (
    <>
      <Navbar />
      <section
        className="bg-cover h-screen flex justify-center mt-24"
        style={{
          backgroundImage: `url(${successBg})`,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backgroundBlendMode: "darken",
        }}
        id="home"
      >
        <div className="text-center backdrop-blur-md md:p-10 p-5 h-max mt-20 rounded-md md:max-w-[550px] max-w-[300px]">
          <h2 className="text-white font-bold md:text-[40px] text-[20px] mb-2">
            Congratulations!
          </h2>
          <p className="text-white font-garamond md:text-[25px] text-[18px] mb-8">
            Registration successful. Kindly check your email for further
            instructions. Our counsellor will reach out to shortly.
          </p>

          <div className="flex gap-3 align-center justify-center">
            <DownloadButton text="Download Brochure" transparent={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
