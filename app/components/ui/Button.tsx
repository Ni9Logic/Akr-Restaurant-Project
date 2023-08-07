import { Link } from "react-scroll";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    width?: number;
    inView?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, width, inView, children, ...props }) => {
    return (
        <>
            <Link activeClass="active" to={title.toLowerCase()} spy={true} smooth={true} offset={50} duration={500} >
                <button className={`relative inline-block px-4 py-2 font-medium group w-[${width}px] max-sm:w-[200px] max-sm:min-w-[120px]`}>
                    <span
                        className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span
                        className={`absolute inset-0 w-full h-full border-2 border-black group-hover:bg-red-500 ${inView ? 'bg-red-500' : 'bg-white'}`}></span>
                    <span className={`relative  group-hover:text-white ${inView ? 'text-white' : 'text-black'}`}>{title}</span>
                    {children} {/* Use the children here */}
                </button>
            </Link>

        </>
    )
}

export default Button;