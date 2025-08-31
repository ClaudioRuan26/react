function Logos(props) {
    let width = props.width || "16";

    return (

        <div className="relative group">
            <img
                src={`public/images/${props.title}.svg`}
                alt={`Logo ${props.title}`}
                className={`w-${width} h-16`}
            />
            <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
                    bg-gray-800 text-white text-xs rounded-md whitespace-nowrap 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
                {props.title}
            </span>
        </div>
    )
}

export default Logos;