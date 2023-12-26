import { useParams } from "react-router-dom";
import ListVideo from "./ListVideo/ListVideo";
import HeaderLessons from "./HeaderLessons/HeaderLessons";
import NotFound from "../../components/NotFound/NotFound";
import { useContext, useState } from "react";
import { AppContext } from "../../components/context/AppContext";
import FooterLessons from "./FooterLessons/FooterLessons";

function LessonsVideo() {
    const {
        chauHong,
        chiDuoi,
        chiTren,
        dauMatCo,
        longNguc,
        thanKinhTrungUong,
    } = useContext(AppContext);
    const [onOff, setOnOff] = useState(true);
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
        <div style={{ minHeight: "100vh" }}>
            <HeaderLessons title={title} />
            <ListVideo
                lessonsData={lessonsData}
                onOff={onOff}
                setOnOff={setOnOff}
            />
            <FooterLessons onOff={onOff} setOnOff={setOnOff} />
        </div>
    );
}

export default LessonsVideo;
