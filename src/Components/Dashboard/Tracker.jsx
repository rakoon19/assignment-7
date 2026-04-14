

const Tracker = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4">

            <div className="p-8 flex flex-col gap-2 card bg-base-100 shadow-sm">
                <span className="text-[#244D3F] text-3xl font-semibold text-center">10</span>
                <p className="text-[#64748B] text-xl text-center">Total Friends</p>
            </div>

            <div className="p-8 flex flex-col gap-2 card bg-base-100 shadow-sm">
                <span className="text-[#244D3F] text-3xl font-semibold text-center">3</span>
                <p className="text-[#64748B] text-xl text-center">On Track</p>
            </div>

            <div className="p-8 flex flex-col gap-2 card bg-base-100 shadow-sm">
                <span className="text-[#244D3F] text-3xl font-semibold text-center">6</span>
                <p className="text-[#64748B] text-xl text-center">Need Attention</p>
            </div>

            <div className="p-8 flex flex-col gap-2 card bg-base-100 shadow-sm">
                <span className="text-[#244D3F] text-3xl font-semibold text-center">12</span>
                <p className="text-[#64748B] text-xl text-center">Interactions This Month</p>
            </div>
            
        </div>
    );
};

export default Tracker;