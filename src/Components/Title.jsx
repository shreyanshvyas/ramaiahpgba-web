const Title = ({name, colored}) => {
    return (
        <h2 className="text-xl md:text-[30px] lg:text-[40px] text-navy">{name} <span className="text-orange font-bold">{colored}</span></h2>
    );
};

export default Title;