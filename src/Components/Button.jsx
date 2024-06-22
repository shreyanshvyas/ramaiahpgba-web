import { LuDownload } from "react-icons/lu";

const Button = ({text, secondary}) => {
    return (
        <>
            <button className={`w-full lg:w-auto font-flama bg-gradient-to-r from-[#942B5D] to-[#D2482C] text-white py-2 px-6 rounded-md ${secondary ? "color-orange bg-white bg-none !text-orange border flex items-center justify-center gap-2" : ""}`}>
                {text}
                {secondary ? <LuDownload /> : ""}
            </button>
        </>
    );
};

export default Button;