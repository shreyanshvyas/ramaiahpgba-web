import Title from "../Components/Title"
import YouTubeEmbed from "../Components/YoutubeEmbed";
import img1 from "../assets/img/ramaiah/1.png"
import img2 from "../assets/img/ramaiah/2.png"
import img3 from "../assets/img/ramaiah/3.jpg"

const Ramaiah = () => {
    return (
        <section className="md:py-[50px] py-[30px] bg-gradient-to-r from-[#fbece7] to-white-100" id="ramaiah">
            <div className="container mx-auto px-3 md:px-10">
                <Title name="About" colored="Ramaiah"/>
                <p className="mb-5 mt-5">Ramaiah Institute of Management is one of the most preferred Business schools in Bangalore. Being located in the heart of the city the institute is acclaimed as one of the best Business schools providing quality management education through its PGDM program.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                    <div>
                    <div className="relative mb-2 md:mb-0">
                        <div className="w-full h-full bg-orange absolute rounded-lg -right-3 -bottom-3"></div>
                        <YouTubeEmbed videoId="-gbb5yr8s6Q" />
                    </div>
                    </div>
                    <div>
                        <img src={img2} alt="" className="lg:max-w-[300px] md:max-w-full mx-auto rounded-2xl" loading="lazy"/>
                    </div>
                    <div className="relative mb-2 md:mb-0">
                    <div className="w-full h-full bg-orange absolute rounded-lg lg:-right-4 -right-3 -bottom-4"></div>
                        <img src={img3} alt="" className="lg:max-h-[300px] md:max-w-full mx-auto rounded-2xl relative" loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ramaiah;