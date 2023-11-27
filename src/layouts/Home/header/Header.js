import classNames from "classnames/bind";
import styles from "./header.module.scss";
import icon from "../../../assets/icon/icon";
import { Link } from "react-router-dom";
import img from "../../../assets/img";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <h1>category</h1>
                </Link>
                <div className={cx("seach")}>
                    <img src={icon.seach} />
                    <input type="seach" placeholder="Tìm kiếm bài học" />
                </div>
                <div className={cx("profile")}>
                    <img src={img.avt} />
                </div>
            </div>
        </div>
    );
}

export default Header;
