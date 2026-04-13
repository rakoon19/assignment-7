import FooterPaths from "./FooterPaths";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <div className="space-y-12 sm:space-y-16 md:space-y-20 bg-[#244D3F] text-white p-20 w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-32">
        <FooterPaths />
        <Copyright />
        </div>
    );
};

export default Footer;