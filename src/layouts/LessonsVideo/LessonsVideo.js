import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ListVideo from "./ListVideo/ListVideo";
import NotFound from "../../components/NotFound/NotFound";
import FooterLessons from "./FooterLessons/FooterLessons";
import Header from "../Header/Header";

import { useAppContext } from "../../components/context/AppContext";

function LessonsVideo() {
    useEffect(() => {
        document.title = "Bài học video";
        return () => {
            document.title = "linhzin";
        };
    }, []);
    const {
        chauHong,
        chiDuoi,
        chiTren,
        dauMatCo,
        longNguc,
        thanKinhTrungUong,
    } = useAppContext();
    const [onOff, setOnOff] = useState(true);
    const { lessonsId } = useParams();
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
                <Header />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <NotFound />
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <ListVideo
                lessonsData={lessonsData}
                onOff={onOff}
                setOnOff={setOnOff}
            />
            <FooterLessons onOff={onOff} setOnOff={setOnOff} />
        </>
    );
}

export default LessonsVideo;
