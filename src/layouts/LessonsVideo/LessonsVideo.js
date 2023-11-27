import { useParams } from "react-router-dom";
import ListVideo from "./ListVideo/ListVideo";
import {
    CHAU_HONG,
    CHI_DUOI,
    CHI_TREN,
    DAU_MAT_CO,
    LONG_NGUC,
    TKTW,
} from "../../components/categorys/categorys";
import HeaderLessons from "./HeaderLessons/HeaderLessons";

function LessonsVideo() {
    const { lessonsId } = useParams();
    const title =
        (lessonsId === "chauHong" && "Chậu hông") ||
        (lessonsId === "chiDuoi" && "Chi dưới") ||
        (lessonsId === "chiTren" && "Chi trên") ||
        (lessonsId === "dauMatCo" && "Đầu mặt cổ") ||
        (lessonsId === "longNguc" && "Lồng ngực") ||
        (lessonsId === "tktw" && "Thần kinh trung ương");
    const lessonsData =
        (lessonsId === "chauHong" && CHAU_HONG) ||
        (lessonsId === "chiDuoi" && CHI_DUOI) ||
        (lessonsId === "chiTren" && CHI_TREN) ||
        (lessonsId === "dauMatCo" && DAU_MAT_CO) ||
        (lessonsId === "longNguc" && LONG_NGUC) ||
        (lessonsId === "tktw" && TKTW);
    return (
        <>
            <HeaderLessons title={title} />
            <ListVideo lessonsData={lessonsData} />
        </>
    );
}

export default LessonsVideo;
