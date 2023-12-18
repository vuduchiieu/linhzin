import { useParams } from "react-router-dom";
import ListVideo from "./ListVideo/ListVideo";
import HeaderLessons from "./HeaderLessons/HeaderLessons";
import NotFound from "../../components/NotFound/NotFound";
import { useContext } from "react";
import { AppContext } from "../../components/context/AppContext";

function LessonsVideo() {
    const {
        chauHong,
        chiDuoi,
        chiTren,
        dauMatCo,
        longNguc,
        thanKinhTrungUong,
    } = useContext(AppContext);
    const { lessonsId } = useParams();
    const title =
        (lessonsId === "chauHong" && "Chậu hông") ||
        (lessonsId === "chiDuoi" && "Chi dưới") ||
        (lessonsId === "chiTren" && "Chi trên") ||
        (lessonsId === "dauMatCo" && "Đầu mặt cổ") ||
        (lessonsId === "longNguc" && "Lồng ngực") ||
        (lessonsId === "tktw" && "Thần kinh trung ương");
    const lessonsData =
        (lessonsId === "chauHong" && chauHong) ||
        (lessonsId === "chiDuoi" && chiDuoi) ||
        (lessonsId === "chiTren" && chiTren) ||
        (lessonsId === "dauMatCo" && dauMatCo) ||
        (lessonsId === "longNguc" && longNguc) ||
        (lessonsId === "tktw" && thanKinhTrungUong);
    if (!lessonsData) {
        return (
            <>
                <HeaderLessons />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div>
                        <NotFound />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <HeaderLessons title={title} />
            <ListVideo lessonsData={lessonsData} />
        </>
    );
}

export default LessonsVideo;
