import classNames from "classnames/bind";
import styles from "./listVideo.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function ListVideo({ lessonsData }) {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selecTitle, setSelecTitle] = useState(null);
    const [active, setActive] = useState(0);
    useEffect(() => {
        if (lessonsData.length > 0) {
            setSelectedVideo(lessonsData[0].src);
            setSelecTitle(lessonsData[0].title);
        }
    }, [lessonsData]);
    const handleOpen = (src, i, title) => {
        setActive(i);
        setSelectedVideo(src);
        setSelecTitle(title);
    };

    return (
        <div className={cx("lessons")}>
            <div className={cx("lesson")}>
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        {selectedVideo && (
                            <iframe
                                width="1300"
                                height="737"
                                allowfullscreen=""
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                frameborder="0"
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
