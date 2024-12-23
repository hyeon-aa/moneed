import AlignCarousel from "../../components/Carousel/AlignCarousel";

const MainShortforms = () => {

    const ALIGNOPTIONS = {
        slidesToScroll: 1,
        loop: true,
        align: "start",
        draggable: true,
        containScroll: "trimSnaps",
    };

    const videoSlides = [
        {
            videoUrl: "",
            title: "동영상 1",
            createdAt: "2024-12-10T10:00:00Z",
        },
        {
            videoUrl: "",
            title: "동영상 2",
            createdAt: "2024-12-09T09:00:00Z",
        },
        {
            videoUrl: "",
            title: "동영상 3",
            createdAt: "2024-12-09T09:00:00Z",
        },
        {
            videoUrl: "",
            title: "동영상 4",
            createdAt: "2024-12-09T09:00:00Z",
        },
        {
            videoUrl: "",
            title: "동영상 5",
            createdAt: "2024-12-09T09:00:00Z",
        },
    ];

    return (
        <>
            <div className="mx-[-2rem] overflow-x-hidden">
                <AlignCarousel slides={videoSlides} type="video" options={ALIGNOPTIONS} slidesToShow={3} />
            </div>
        </>
    );
};

export default MainShortforms;