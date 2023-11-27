import classNames from "classnames/bind";
import styles from "./listVideo.module.scss";
import { useAppContext } from "../../../components/context/AppContext";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function ListVideo({ lessonsData }) {
    const {
        selectedVideo,
        setSelectedVideo,
        selecTitle,
        setSelecTitle,
        active,
        handleOpen,
    } = useAppContext();
    useEffect(() => {
        if (lessonsData.length > 0) {
            setSelectedVideo(lessonsData[0].src);
            setSelecTitle(lessonsData[0].title);
        }
    }, [lessonsData]);
    return (
        <div className={cx("lessons")}>
            <div className={cx("lesson")}>
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        {selectedVideo && (
                            <iframe
                                width="1300"
                                height="737"
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
                    {lessonsData.map((item, i) => (
                        <button
                            onClick={() => handleOpen(item.src, i, item.title)}
                            key={i}
                            className={cx("button", {
                                active: i === active,
                            })}
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
