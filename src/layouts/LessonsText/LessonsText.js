import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import { useAppContext } from "../../components/context/AppContext";
import ListText from "./ListText/ListText";

function LessonsText() {
    useEffect(() => {
        document.title = "Bài học lý thuyết";
        return () => {
            document.title = "linhzin";
        };
    }, []);

    const { taiMuiHong, giaiPhauNguoi } = useAppContext();
    const { lessonsId } = useParams();
    const lessonsData =
        (lessonsId === "giaiphaunguoi" && giaiPhauNguoi) ||
        (lessonsId === "taimuihong" && taiMuiHong);
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
            <ListText lessonsData={lessonsData} />
        </>
    );
}

export default LessonsText;
