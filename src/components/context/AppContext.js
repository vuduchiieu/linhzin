import React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import img from "../../assets/img";
import axios from "axios";

import {
    chauHong,
    chiDuoi,
    chiTren,
    dauMatCo,
    longNguc,
    thanKinhTrungUong,
} from "../listLessons/LessonsVideo";

import { giaiPhauNguoi } from "../listLessons/lessonsText";

const AppContext = createContext();

const Contexts = ({ children }) => {
    const [lessons, setLessons] = useState([
        {
            title: "Chậu hông",
            img: img.chauHong,
            length: 3,
            to: "/lessons/chauHong",
        },
        {
            title: "Chi dưới",
            img: img.chiDuoi,
            length: 5,
            to: "/lessons/chiDuoi",
        },
        {
            title: "Chi trên",
            img: img.chiTren,
            length: 4,
            to: "/lessons/chiTren",
        },
        {
            title: "Đầu mặt cổ",
            img: img.dauMatCo,
            length: 8,
            to: "/lessons/dauMatCo",
        },
        {
            title: "Lồng ngực",
            img: img.longNguc,
            length: 4,
            to: "/lessons/longNguc",
        },
        {
            title: "Thần kinh trung ương",
            img: img.tktw,
            length: 6,
            to: "/lessons/tktw",
        },
    ]);

    const [textLessons, setTextLessons] = useState([
        {
            title: "Giải phẫu người",
            img: img.giaiphaunguoi,
            length: 42,
            to: "/text/giaiphaunguoi",
        },
        {
            title: "Tai mũi họng",
            img: null,
            length: 26,
            to: "/text/taimuihong",
        },
        {
            title: "Đang cập nhật....",
            img: null,
            length: "đang cập nhật",
            to: "/",
        },
    ]);

    const [taiMuiHong, setTaiMuiHong] = useState([
        {
            id: 0,
            title: "Tai mũi họng",
            src: "",
            to: "/text/taimuihong",
        },
    ]);

    const [refreshData, setRefreshData] = useState(true);
    const [listGhiChu, setListGhiChu] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/ghichus"
                );
                setListGhiChu(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            } finally {
                setRefreshData(false);
            }
        };
        if (refreshData) {
            fetchData();
        }
    }, [refreshData]);

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selecTitle, setSelecTitle] = useState(null);
    const [active, setActive] = useState(0);
    const [ghichu, setGhiChu] = useState([]);
    const [chitiet, setChiTiet] = useState(false);

    const handleOpen = (src, id, title) => {
        setActive(id);
        setSelectedVideo(src);
        setSelecTitle(title);
    };

    const [togleGhiChu, setTogleGhiChu] = useState(false);
    const filterRef = useRef(null);
    const handleClickOutside = (e) => {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            setTogleGhiChu(false);
        }
    };
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                setTogleGhiChu(false);
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );
    const saveTheme = localStorage.getItem("dark");
    const initialTheme =
        saveTheme !== null ? JSON.parse(saveTheme) : darkModeMediaQuery.matches;
    const [isDarkMode, setIsDarkMode] = useState(initialTheme);
    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <AppContext.Provider
            value={{
                lessons,
                chauHong,
                chiDuoi,
                chiTren,
                dauMatCo,
                longNguc,
                thanKinhTrungUong,
                textLessons,
                taiMuiHong,
                giaiPhauNguoi,
                setRefreshData,
                listGhiChu,
                setListGhiChu,
                selectedVideo,
                setSelectedVideo,
                selecTitle,
                setSelecTitle,
                active,
                setActive,
                handleOpen,
                ghichu,
                setGhiChu,
                chitiet,
                setChiTiet,
                togleGhiChu,
                setTogleGhiChu,
                filterRef,
                isLoading,
                setIsLoading,
                isDarkMode,
                setIsDarkMode,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { Contexts, useAppContext };
