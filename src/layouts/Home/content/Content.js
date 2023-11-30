import classNames from "classnames/bind";
import styles from "./content.module.scss";
import img from "../../../assets/img";
import { textLessons, lessons } from "../../../components/lessons/lessons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("content")}>
                <div className={cx("banner")}>
                    <img src={img.banner} />
                    <img src={img.phone} />
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
                                    backgroundColor: "#F6F6F6",
                                    cursor: "default",
                                    opacity: 1,
                                }}
                            >
                                {/* <img src={item.img} /> */}
                                <div className={cx("title")}>
                                    <h3>{item.title}</h3>
                                    <p>{item.length} </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
