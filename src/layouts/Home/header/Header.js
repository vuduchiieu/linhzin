import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import img from "../../../assets/img";
import Search from "./Search/Search";
import icon from "../../../assets/icon";
import { useEffect, useRef, useState } from "react";
import MiniGhiChu from "./MiniGhiChu/MiniGhiChu";

const cx = classNames.bind(styles);
function Header() {
    const [ghiChu, setGhiChu] = useState(false);
    const filterRef = useRef(null);
    const handleClickOutside = (e) => {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            setGhiChu(false);
        }
    };
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                setGhiChu(false);
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div className={cx("wrap")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <h1>category</h1>
                </Link>
                <div className={cx("search")}>
                    <Search />
                </div>
                <div className={cx("document")} ref={filterRef}>
                    <img
                        onClick={() => {
                            setGhiChu(!ghiChu);
                        }}
                        src={icon.document}
                        alt=""
                    />
                    {ghiChu && (
                        <div className={cx("popper")}>
                            <MiniGhiChu setGhiChu={setGhiChu} />
                        </div>
                    )}
                </div>
                <div className={cx("profile")}>
                    <img src={img.avt} />
                </div>
            </div>
        </div>
    );
}

export default Header;
