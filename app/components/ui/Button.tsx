import { useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    id?: string;
    width?: number;
    inView?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, width, inView, children, id, ...props }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const scrollToButton = () => {
            if (inView && buttonRef.current) {
                // Calculate the right edge of the button relative to the viewport
                const buttonRightEdge = buttonRef.current.getBoundingClientRect().right;
                const windowWidth = window.innerWidth;

                // Check if the button's right edge is outside the viewport
                if (buttonRightEdge > windowWidth) {
                    // Calculate the amount to scroll by
                    const scrollAmount = buttonRightEdge - windowWidth + 20; // Adjust the value as needed

                    // Scroll the container horizontally
                    window.scrollTo({
                        left: window.scrollX + scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Listen for window resize events to re-check the scrolling when the viewport changes
        window.addEventListener('resize', scrollToButton);

        // Initial scroll check
        scrollToButton();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', scrollToButton);
        };
    }, [inView]);

    return (
        <Link activeClass="active" to={title.toLowerCase()} spy={true} smooth={true} offset={50} duration={500}>
            <button
                ref={buttonRef} // Attach the ref to the button element
                id={id}
                className={`relative inline-block px-4 py-2 font-medium group w-[${width}px]`}
            >
                <span
                    className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span
                    className={`absolute inset-0 w-full h-full border-2 border-black group-hover:bg-red-500 ${inView ? 'bg-red-500' : 'bg-white'}`}></span>
                <span className={`relative  group-hover:text-white ${inView ? 'text-white' : 'text-black'}`}>{title}</span>
                {children} {/* Use the children here */}
            </button>
        </Link>
    );
}
export default Button;
