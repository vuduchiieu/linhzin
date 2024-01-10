import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import img from "../../../assets/img";

import styles from "./content.module.scss";

import { useAppContext } from "../../../components/context/AppContext";

const cx = classNames.bind(styles);

function Content() {
    const { lessons, textLessons } = useAppContext();

    return (
        <main className={cx("wrap")}>
            <div className={cx("content")}>
                <div className={cx("banner")}>
                    <img src={img.banner} />
                    <img src={img.ambulance} />
                    <img src={img.hospital} />
                </div>
                <div className={cx("video-lessons")}>
                    <h2>Bài học video</h2>
                    <div className={cx("wrap")}>
                        {lessons.map((item, i) => (
                            <Link
                                to={item.to}
                                key={i}
                                className={cx("lessons")}
                            >
                                <img src={item.img} />
                                <div className={cx("title")}>
                                    <h3>{item.title}</h3>
                                    <p>{item.length} video</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={cx("text-lessons")}>
                    <h2>Bài học lý thuyết</h2>
                    <div className={cx("wrap")}>
                        {textLessons.map((item, i) => (
                            <Link
                                to={item.to}
                                key={i}
                                className={cx("lessons")}
                                style={{
                                    cursor: "default",
                                    opacity: 1,
                                }}
                            >
                                <div className={cx("title")}>
                                    <h3>{item.title}</h3>
                                    <p>{item.length} </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;
