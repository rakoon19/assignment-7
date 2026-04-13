import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
    return (
        <div className='flex gap-3 self-center'>
            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <AiFillInstagram className="w-5 h-5 text-black" />
            </div>

            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <FaFacebookSquare className="w-5 h-5 text-black" />
            </div>

            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <FaXTwitter className="w-5 h-5 text-black" />
            </div>
        </div>
    );
};

export default SocialLinks;