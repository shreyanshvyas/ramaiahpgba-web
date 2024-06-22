import { useForm } from "react-hook-form";

const BannerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-white p-7 rounded-2xl max-w-[450px] ml-auto">
            <h2 className="text-[25px] text-navy font-bold mb-4">Enquiry Form</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input  {...register("example")} 
                    placeholder="Full Name" 
                    className="border px-4 py-3 border-[#E7E6E6] rounded-lg mb-5 placeholder-navy font-flama"
                />
                <input  {...register("example")} 
                    placeholder="Email Address" 
                    className="border px-4 py-3 border-[#E7E6E6] rounded-lg mb-5 placeholder-navy font-flama"
                />
                <input  {...register("example")} 
                    placeholder="Phone Number" 
                    className="border px-4 py-3 border-[#E7E6E6] rounded-lg mb-5 placeholder-navy font-flama"
                />
                <select {...register("Qualification", { required: true })} className="font-flama border px-4 py-3 border-[#E7E6E6] rounded-lg mb-5 text-navy">
                    <option value="Qualification">Qualification</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <select {...register("Country", { required: true })} className="font-flama border px-4 py-3 border-[#E7E6E6] rounded-lg mb-5 text-navy">
                    <option value="Country">Country</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <select {...register("City", { required: true })} className="font-flama border px-4 py-3 border-[#E7E6E6] rounded-lg mb-5 text-navy">
                    <option value="City">City</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button 
                    type="submit" 
                    className="font-flama bg-gradient-to-r from-[#942B5D] to-[#D2482C] text-white cursor-pointer py-3 text-[18px] rounded-lg"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default BannerForm;