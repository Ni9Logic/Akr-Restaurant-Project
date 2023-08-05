import React from "react";

interface ButtonProps {
    title: String
    width?: number
}

const Button: React.FC<ButtonProps> = ({title, width}) => {
    return (
        <>
            <button className={`relative inline-block px-4 py-2 font-medium group w-[${width}px] max-sm:w-[200px] max-sm:min-w-[157px]`}>
                <span
                    className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span
                    className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-500"></span>
                <span className="relative text-black group-hover:text-white">{title}</span>
            </button>
        </>
    )
}

export default Button;