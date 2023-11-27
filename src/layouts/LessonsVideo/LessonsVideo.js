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
import Header from "../Home/header/Header";

function LessonsVideo() {
    const { lessonsId } = useParams();
    const lessonsData =
        (lessonsId === "chauHong" && CHAU_HONG) ||
        (lessonsId === "chiDuoi" && CHI_DUOI) ||
        (lessonsId === "chiTren" && CHI_TREN) ||
        (lessonsId === "dauMatCo" && DAU_MAT_CO) ||
        (lessonsId === "longNguc" && LONG_NGUC) ||
        (lessonsId === "tktw" && TKTW);
    return (
        <>
            <Header />
            <ListVideo lessonsData={lessonsData} />
        </>
    );
}

export default LessonsVideo;
