import Button from "../Components/Button";

const Schedule = () => {
    return (
        <section className="py-[50px] border-b">
            <div className="container mx-auto px-3 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="mb-5 md:mb-0 text-center">
                        <h2 className="text-2xl md:text-[40px] mb-1">Download <span className="text-orange font-bold">Brochure</span></h2>
                    </div>
                    <div className="text-center">
                        <Button text="Download Now"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;