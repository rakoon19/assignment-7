import Hero from "./Hero";
import FriendsList from "./FriendsList";

const Dashboard = () => {
    return (
        <div className="py-8 px-6 md:py-16 md:px-32 lg:py-20 lg:px-60">
            <Hero />
            <FriendsList />
        </div>
    );
};

export default Dashboard;