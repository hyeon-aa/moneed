import StockInfoBox from "../../components/StockInfoBox";
import { useNavigate } from "react-router-dom";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import { useState } from "react";
import Posts from "../Community/Posts";

const TopStockRank = () => {

    const StockRank = [
        '🥇 1위종목', '🥈 2위종목', '🥉 3위종목'
    ];

    const allPosts = [
        {
            postId: 1,
            title: "1",
            postImages: [
                'https://via.placeholder.com/600x350/ff7f7f/333333',
                'https://via.placeholder.com/600x350/7f7fff/333333',
                'https://via.placeholder.com/600x350/7fff7f/333333'
            ],
            content: "1 테슬라 주식 언제 사 ",
            userName: "사용자1",
            createdAt: "2024-12-10T10:00:00Z",
            likes: 10,
            stocktype: "🥇 1위종목",
            category: "금융",
            isliked: true,
        },
        {
            postId: 2,
            title: "2",
            postImages: [
                'https://via.placeholder.com/600x350/7f7fff/333333',
                'https://via.placeholder.com/600x350/7f7fff/333333',
                'https://via.placeholder.com/600x350/7fff7f/333333'
            ],
            content: "2",
            userName: "사용자5",
            createdAt: "2024-12-09T09:00:00Z",
            likes: 7,
            stocktype: "🥈 2위종목",
            category: "정보기술",
            isliked: false,
        },
        {
            postId: 3,
            title: "3",
            postImages: [
                'https://via.placeholder.com/600x350/ff7f7f/333333',
                'https://via.placeholder.com/600x350/7f7fff/333333',
                'https://via.placeholder.com/600x350/7fff7f/333333'
            ],
            content: "3 테슬라 언제 오르지?",
            userName: "사용자6",
            createdAt: "2024-12-09T09:00:00Z",
            likes: 7,
            stocktype: "🥉 3위종목",
            category: "금융",
            isliked: false,
        }
    ];

    const [selectedStockRank, setSelectedStockRank] = useState(StockRank[0])

    let navigate = useNavigate();
    const movecommunity = (stockname: string) => {
        navigate(`/community/${stockname}`);
    };

    const filteredPosts = allPosts.filter(post => post.stocktype === selectedStockRank);

    return (
        <>
            <div className="flex gap-4">
                {StockRank.map((stock, index) => (
                    <Chip
                        key={index}
                        label={stock}
                        onClick={() => setSelectedStockRank(stock)}
                        active={selectedStockRank === stock}
                    />
                ))}
            </div>

            <div>
                <Posts
                    posts={filteredPosts}
                    displayMode="list"
                    isImgShow={false}
                />
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[.6rem] gap-x-[1.6rem] mt-4 md:gap-y-[1.2rem]">
                    <div className="border border-solid border-[var(--moneed-gray-5)] p-[1.8rem] rounded-[1.8rem]">
                        <div className="flex items-center gap-[.6rem]">
                            <div className="rounded-full overflow-hidden aspect-[1/1] w-[1.8rem]">
                                <img src="/src/assets/temp/sample3.png" alt="" className="w-full h-full object-cover"/>
                            </div>
                            <span className="text-[1.4rem] font-[400] leading-[142%] text-[var(--moneed-gray-7)]">
                                랩날라리
                            </span>
                            <i className="w-[.2rem] h-[.2rem] rounded-full bg-[var(--moneed-gray-5)]"></i>
                            <span className="text-[1.4rem] font-[400] leading-[142%] text-[var(--moneed-gray-7)]">
                                8분 전
                            </span>
                        </div>
                        <p className="mt-[1.2rem] text-[1.6rem] font-bold leading-[135%] text-[var(--moneed-black)] line-clamp-1">
                            테슬라감사합니다❤️
                        </p>
                        <p className="mt-[.4rem] text-[1.6rem] font-[400] leading-[145%] text-[var(--moneed-gray-9)] line-clamp-2">
                            12월 테슬라 팔란티어 덕분에 큰 수익 얻었습니다.
                            트럼프 당선 후 불장에 얻어걸렸네요.
                        </p>
                    </div>
                    <div className="border border-solid border-[var(--moneed-gray-5)] p-[1.8rem] rounded-[1.8rem]">
                        <div className="flex items-center gap-[.6rem]">
                            <div className="rounded-full overflow-hidden aspect-[1/1] w-[1.8rem]">
                                <img src="/src/assets/temp/sample3.png" alt="" className="w-full h-full object-cover"/>
                            </div>
                            <span className="text-[1.4rem] font-[400] leading-[142%] text-[var(--moneed-gray-7)]">
                                랩날라리
                            </span>
                            <i className="w-[.2rem] h-[.2rem] rounded-full bg-[var(--moneed-gray-5)]"></i>
                            <span className="text-[1.4rem] font-[400] leading-[142%] text-[var(--moneed-gray-7)]">
                                8분 전
                            </span>
                        </div>
                        <p className="mt-[1.2rem] text-[1.6rem] font-bold leading-[135%] text-[var(--moneed-black)] line-clamp-1">
                            테슬라감사합니다❤️
                        </p>
                        <p className="mt-[.4rem] text-[1.6rem] font-[400] leading-[145%] text-[var(--moneed-gray-9)] line-clamp-2">
                            12월 테슬라 팔란티어 덕분에 큰 수익 얻었습니다.
                            트럼프 당선 후 불장에 얻어걸렸네요.
                        </p>
                    </div>
                    <div className="border border-solid border-[var(--moneed-gray-5)] p-[1.8rem] rounded-[1.8rem]">
                        <div className="flex items-center gap-[.6rem]">
                            <div className="rounded-full overflow-hidden aspect-[1/1] w-[1.8rem]">
                                <img src="/src/assets/temp/sample3.png" alt="" className="w-full h-full object-cover"/>
                            </div>
                            <span className="text-[1.4rem] font-[400] leading-[142%] text-[var(--moneed-gray-7)]">
                                랩날라리
                            </span>
                            <i className="w-[.2rem] h-[.2rem] rounded-full bg-[var(--moneed-gray-5)]"></i>
                            <span className="text-[1.4rem] font-[400] leading-[142%] text-[var(--moneed-gray-7)]">
                                8분 전
                            </span>
                        </div>
                        <p className="mt-[1.2rem] text-[1.6rem] font-bold leading-[135%] text-[var(--moneed-black)] line-clamp-1">
                            테슬라감사합니다❤️
                        </p>
                        <p className="mt-[.4rem] text-[1.6rem] font-[400] leading-[145%] text-[var(--moneed-gray-9)] line-clamp-2">
                            12월 테슬라 팔란티어 덕분에 큰 수익 얻었습니다.
                            트럼프 당선 후 불장에 얻어걸렸네요.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-[1.8rem] lg:justify-start lg:mt-[2.6rem]">
                    <Button onClick={() => movecommunity(selectedStockRank)} className="flex items-center gap-[.8rem] py-0 lg:pl-0">
                        <span className="text-[1.4rem] text-[var(--moneed-gray-8)] font-semibold leading-[135%]">
                            해당 게시판 더보기
                        </span>
                        <img src="/src/assets/icon/icon-arrow-right.svg" alt=""/>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default TopStockRank;
