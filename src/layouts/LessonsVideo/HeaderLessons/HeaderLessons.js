import classNames from "classnames/bind";
import styles from "./HeaderLessons.module.scss";
import { Link, useParams } from "react-router-dom";
import icon from "../../../assets/icon";
const cx = classNames.bind(styles);

function HeaderLessons({ lessonsData }) {
    const { lessonsId } = useParams();

    return (
        <div className={cx("header-lessons")}>
            <Link to={"/"} className={cx("title")}>
                <div className={cx("back")}>
                    <img src={icon.back} />
                </div>
                <h3>{lessonsId}</h3>
            </Link>
        </div>
    );
}

export default HeaderLessons;
