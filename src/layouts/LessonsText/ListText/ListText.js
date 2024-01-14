import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames/bind";

import styles from "./listText.module.scss";
import { useAppContext } from "../../../components/context/AppContext";

const cx = classNames.bind(styles);

function ListText({ lessonsData }) {
    const { handleOpen, selectedVideo, setActive, active } = useAppContext();
    const activeButtonRef = useRef(null);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        return () => {
            if (isMounted) {
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
            <div className={cx("main")}>
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        <iframe
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            src={selectedVideo}
                        ></iframe>
                    </div>
                    <div className={cx("title")}>
                        <h3></h3>
                    </div>
                </div>

                <div className={cx("nav-bar")}>
                    <div className={cx("wrap")}>
                        {lessonsData.map((item) => (
                            <button
                                onClick={() =>
                                    handleOpen(item.src, item.id, item.title)
                                }
                                key={item.id}
                                className={cx("button", {
                                    active: item.id === active,
                                })}
                                ref={
                                    item.id === active ? activeButtonRef : null
                                }
                            >
                                <p>{item.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListText;
