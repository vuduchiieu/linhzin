import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import img from "../../../assets/img";
import icon from "../../../assets/icon";

import styles from "./header.module.scss";

import Search from "./Search/Search";
import MiniGhiChu from "./MiniGhiChu/MiniGhiChu";

import { useAppContext } from "../../../components/context/AppContext";

const cx = classNames.bind(styles);
function Header() {
    const {
        togleGhiChu,
        setTogleGhiChu,
        filterRef,
        isDarkMode,
        setIsDarkMode,
    } = useAppContext();

    return (
        <header className={cx("wrap")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <img src={img.logo} alt="" />
                    <h1>linhzin</h1>
                </Link>
                <div className={cx("search")}>
                    <Search />
                </div>
                <div className={cx("action")}>
                    <div
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={cx("theme")}
                    >
                        {isDarkMode === true ? (
                            <img src={icon.light} />
                        ) : (
                            <img src={icon.dark} />
                        )}
                    </div>
                    <div className={cx("document")} ref={filterRef}>
                        <img
                            className={cx("icon-document")}
                            onClick={() => {
                                setTogleGhiChu(!togleGhiChu);
                            }}
                            src={icon.document}
                        />
                        {togleGhiChu && (
                            <div className={cx("popper")}>
                                <MiniGhiChu setTogleGhiChu={setTogleGhiChu} />
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx("profile")}>
                    <img src={img.avt} />
                </div>
            </div>
        </header>
    );
}

export default Header;
