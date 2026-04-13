const Copyright = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#fafafa50] text-sm">

            <p className="text-center sm:text-left">
                © 2026 Digitools. All rights reserved.
            </p>

            <ul className="flex flex-wrap justify-center sm:justify-end gap-4">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>

        </div>
    );
};

export default Copyright;