import classNames from "classnames/bind";
import React from "react";
import styles from "./listVideo.module.scss";
import { useAppContext } from "../../../components/context/AppContext";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function ListVideo({ lessonsData, onOff, setOnOff }) {
    const {
        selectedVideo,
        setSelectedVideo,
        selecTitle,
        setSelecTitle,
        active,
        setActive,
        handleOpen,
    } = useAppContext();
    const activeButtonRef = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            if (newWidth < 739 && newWidth > 729) {
                setOnOff(true);
            } else if (newWidth < 1570 && newWidth > 1560) {
                setOnOff(false);
            }
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [width]);

    useEffect(() => {
        if (active === null) {
            setSelectedVideo(lessonsData[0].src);
            setSelecTitle(lessonsData[0].title);
            setActive(lessonsData[0].id);
        }
    }, [lessonsData]);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        return () => {
            if (isMounted) {
                setSelectedVideo(null);
                setSelecTitle(null);
                setActive(null);
            }
        };
    }, [isMounted]);
    useEffect(() => {
        if (activeButtonRef.current) {
            activeButtonRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [active, activeButtonRef]);

    return (
        <div className={cx("lessons")}>
            <div
                className={cx("main")}
                style={onOff ? { display: "flex" } : { display: "block" }}
            >
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        {selectedVideo && (
                            <iframe
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                src={selectedVideo}
                            ></iframe>
                        )}
                    </div>
                    <div className={cx("title")}>
                        {selecTitle && <h3>{selecTitle}</h3>}
                        <p>Cập nhật tháng 11 năm 2023</p>
                    </div>
                </div>
                {onOff && (
                    <div className={cx("nav-bar")}>
                        <div className={cx("wrap")}>
                            {lessonsData.map((item) => (
                                <button
                                    onClick={() =>
                                        handleOpen(
                                            item.src,
                                            item.id,
                                            item.title
                                        )
                                    }
                                    key={item.id}
                                    className={cx("button", {
                                        active: item.id === active,
                                    })}
                                    ref={
                                        item.id === active
                                            ? activeButtonRef
                                            : null
                                    }
                                >
                                    <p>{item.title}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListVideo;
