import classNames from "classnames/bind";
import styles from "./listVideo.module.scss";
import { useAppContext } from "../../../components/context/AppContext";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function ListVideo({ lessonsData }) {
    const {
        selectedVideo,
        setSelectedVideo,
        selecTitle,
        setSelecTitle,
        active,
        setActive,
        handleOpen,
        activeButtonRef,
    } = useAppContext();

    useEffect(() => {
        if (active === null) {
            setSelectedVideo(lessonsData[0].src);
            setSelecTitle(lessonsData[0].title);
            setActive(lessonsData[0].id);
        }
    }, [lessonsData]);

    return (
        <div className={cx("lessons")}>
            <div className={cx("lesson")}>
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        {selectedVideo && (
                            <iframe
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
                <div className={cx("nav-bar")}>
                    {lessonsData.map((item) => (
                        <button
                            onClick={() =>
                                handleOpen(item.src, item.id, item.title)
                            }
                            key={item.id}
                            className={cx("button", {
                                active: item.id === active,
                            })}
                            ref={item.id === active ? activeButtonRef : null}
                        >
                            <p>{item.title}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListVideo;
