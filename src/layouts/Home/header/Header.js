import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import img from "../../../assets/img";
import Search from "./Search/Search";

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx("wrap")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <h1>category</h1>
                </Link>
                <div className={cx("search")}>
                    <Search />
                </div>
                <div className={cx("profile")}>
                    <img src={img.avt} />
                </div>
            </div>
        </div>
    );
}

export default Header;
