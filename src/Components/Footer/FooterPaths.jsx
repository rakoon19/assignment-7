import SocialLinks from './SocialLinks';

const FooterPaths = () => {
    return (
            <div className='text-center max-w-7xl mx-auto md:flex-row md:justify-between space-y-6'>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>KeenKeeper</h2>
                    <p className="opacity-80 max-w-full">
                        Premium digital tools for creators,
                        professionals, and businesses. Work smarter
                        with our suite of powerful tools.
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-lg sm:text-xl font-medium'>Social Links</h2>
                    <SocialLinks />
                </div>

            </div>
    );
};

export default FooterPaths;