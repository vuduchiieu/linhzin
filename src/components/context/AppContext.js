import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export const Contexts = ({ children }) => {
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lessons"
                );
                setLessons(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [chauHong, setChauHong] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lesson/chauhong"
                );
                setChauHong(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [chiDuoi, setChiDuoi] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lesson/chiduoi"
                );
                setChiDuoi(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [chiTren, setChiTren] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lesson/chitren"
                );
                setChiTren(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [dauMatCo, setDauMatCo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lesson/daumatco"
                );
                setDauMatCo(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [longNguc, setLongNguc] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lesson/longnguc"
                );
                setLongNguc(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [thanKinhTrungUong, setThanKinhTrungUong] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/lesson/tktw"
                );
                setThanKinhTrungUong(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selecTitle, setSelecTitle] = useState(null);
    const [active, setActive] = useState(0);

    const handleOpen = (src, id, title) => {
        setActive(id);
        setSelectedVideo(src);
        setSelecTitle(title);
    };

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
                selectedVideo,
                setSelectedVideo,
                selecTitle,
                setSelecTitle,
                active,
                setActive,
                handleOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
