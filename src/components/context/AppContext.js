import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const Contexts = ({ children }) => {
    const [chauHong, setChauHong] = useState(true);
    const toggleChauHong = () => {
        setChauHong(!chauHong);
        setChiDuoi(false);
        setChiTren(false);
        setDauMatCo(false);
        setLongNguc(false);
        setTKTW(false);
    };

    const [chiDuoi, setChiDuoi] = useState(false);
    const toggleChiDuoi = () => {
        setChiDuoi(!chiDuoi);
        setChauHong(false);
        setChiTren(false);
        setDauMatCo(false);
        setLongNguc(false);
        setTKTW(false);
    };

    const [chiTren, setChiTren] = useState(false);
    const toggleChiTren = () => {
        setChiTren(!chiTren);
        setChauHong(false);
        setChiDuoi(false);
        setDauMatCo(false);
        setLongNguc(false);
        setTKTW(false);
    };
    const [dauMatCo, setDauMatCo] = useState(false);
    const toggleDauMatCo = () => {
        setDauMatCo(!dauMatCo);
        setChauHong(false);
        setChiDuoi(false);
        setChiTren(false);
        setLongNguc(false);
        setTKTW(false);
    };
    const [longNguc, setLongNguc] = useState(false);
    const toggleLongNguc = () => {
        setLongNguc(!longNguc);
        setChauHong(false);
        setChiDuoi(false);
        setChiTren(false);
        setDauMatCo(false);
        setTKTW(false);
    };

    const [TKTW, setTKTW] = useState(false);
    const toggleTKTW = () => {
        setTKTW(!TKTW);
        setChauHong(false);
        setChiDuoi(false);
        setChiTren(false);
        setDauMatCo(false);
        setLongNguc(false);
    };

    return (
        <AppContext.Provider
            value={{
                chauHong,
                toggleChauHong,
                chiDuoi,
                toggleChiDuoi,
                chiTren,
                toggleChiTren,
                dauMatCo,
                toggleDauMatCo,
                longNguc,
                toggleLongNguc,
                TKTW,
                toggleTKTW,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
