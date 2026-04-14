import { FaPlus } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="flex flex-col gap-8 mb-10">
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="font-bold text-5xl text-center">Friends to keep close in your life</h2>
            <p className="text-[#64748B] text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
            <button className="btn btn-ghost text-white bg-[#244D3F]"><FaPlus />Add a Friend</button>
        </div>
        </div>
    );
};

export default Hero;