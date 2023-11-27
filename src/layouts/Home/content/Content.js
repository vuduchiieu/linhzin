import classNames from "classnames/bind";
import styles from "./content.module.scss";
import img from "../../../assets/img";
import lessons from "../../../components/lessons/lessons";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("content")}>
                <div className={cx("banner")}>
                    <img src={img.banner} />
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
                    <div className={cx("wrap")}></div>
                </div>
            </div>
        </div>
    );
}

export default Content;
