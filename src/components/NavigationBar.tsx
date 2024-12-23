import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <div className="flex items-center pt-[2.4rem] px-[2rem] pb-[1.8rem]">
                <Link to="/" className="flex items-center gap-[.4rem]">
                    <span className="flex items-center justify-center aspect-[1/1] w-[2.8rem] bg-[var(--moneed-black)] rounded-full lg:w-[3.2rem]">
                        <img src="/src/assets/icon/icon-logo.svg" alt="" className="lg:w-[2rem]"/>
                    </span>
                    <span className="text-[1.6rem] font-semibold text-black hidden lg:block">
                        moneed
                    </span>
                </Link>
                <div className="ml-auto flex gap-[2.8rem] items-center">
                    <Link to="/" className="h-[3.8rem] py-4 px-[1.8rem] items-center gap-[.8rem] rounded-[.8rem] bg-[var(--moneed-brand-color)] hidden lg:flex">
                        <img src="/src/assets/icon/icon-edit.svg" alt=""/>
                        <span className="text-[1.4rem] font-semibold text-[var(--moneed-black)]">포스팅</span>
                    </Link>
                    <Link to="/" className="aspect-[1/1] w-[2.4rem]">
                        <img src="/src/assets/icon/icon-notification-2.svg" alt="" className="hidden w-full h-full object-contain lg:block"/>
                        <img src="/src/assets/icon/icon-notification.svg" alt="" className=" w-full h-full object-contain lg:hidden"/>
                    </Link>
                    <Link to="/mypage" className="hidden lg:block">
                        <img src="/src/assets/icon/icon-profile-circle.svg" alt="" className="w-full h-full object-contain"/>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;