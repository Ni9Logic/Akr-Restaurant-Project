"use client"
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Menu from "../components/Sections/Menu";

const Page = () => {
    return (
        <div className="overflow-hidden">
            <NavBar />
            <Menu />
            <Footer />
        </div>
    );
}

export default Page;