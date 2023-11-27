import classNames from "classnames/bind";
import styles from "./HeaderLessons.module.scss";
import { Link, useParams } from "react-router-dom";
import icon from "../../../assets/icon";
const cx = classNames.bind(styles);

function HeaderLessons({ lessonsData }) {
    const { lessonsId } = useParams();

    return (
        <div className={cx("header-lessons")}>
            <div className={cx("title")}>
                <Link className={cx("back")} to={"/"}>
                    <img src={icon.back} />
                </Link>
                <h3>{lessonsId}</h3>
            </div>
        </div>
    );
}

export default HeaderLessons;
