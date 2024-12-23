import LnbLink from "../LnbLink"

type Lnb = {
    active?: boolean;
};
const Lnb = ({ active }: Lnb) => {
    return (
        <>
            <div
                className={`hidden lg:flex shrink-0 flex-col bg-[var(--moneed-gray-3)] h-full pt-[3.2rem] ${active ? "pl-[3.2rem] pr-[2.4rem]" : "px-[1.6rem]"
                }`}
            >
                <button type="button" className="w-[4.4rem] h-[2.4rem] flex items-center justify-center">
                    <img src="/src/assets/icon/icon-nav.svg" alt="" className="aspect-[1/1] w-[2.4rem]" />
                </button>
                <div className="pt-[10.5rem] flex flex-col gap-[1.8rem]">
                    <LnbLink
                        to="/"
                        icon="/src/assets/icon/icon-lnb-1.svg"
                        activeIcon="/src/assets/icon/icon-lnb-1-on.svg"
                        active={true}
                    >
                        <span
                            className={`text-[1.4rem] font-semibold w-[8.4rem] ${active ? "block" : "hidden"
                            }`}
                        >
                            홈
                        </span>
                    </LnbLink>
                    <LnbLink
                        to="/"
                        icon="/src/assets/icon/icon-lnb-2.svg"
                        activeIcon="/src/assets/icon/icon-lnb-2-on.svg"
                    >
                        <span
                            className={`text-[1.4rem] font-semibold w-[8.4rem] ${active ? "block" : "hidden"
                            }`}
                        >
                            숏폼
                        </span>
                    </LnbLink>
                    <LnbLink
                        to="/community"
                        icon="/src/assets/icon/icon-lnb-3.svg"
                        activeIcon="/src/assets/icon/icon-lnb-3-on.svg"
                    >

                        <span
                            className={`text-[1.4rem] font-semibold w-[8.4rem] ${active ? "block" : "hidden"
                            }`}
                        >
                            커뮤니티
                        </span>
                    </LnbLink>
                </div>
            </div>
        </>
    );
};

export default Lnb;