import { createContext, useContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export const Contexts = ({ children }) => {
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
