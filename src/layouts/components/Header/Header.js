import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import img from "../../../assets/img";
import Search from "./Search/Search";
import icon from "../../../assets/icon";
import MiniGhiChu from "./MiniGhiChu/MiniGhiChu";
import { useAppContext } from "../../../components/context/AppContext";
import { useState } from "react";

const cx = classNames.bind(styles);
function Header() {
    const { togleGhiChu, setTogleGhiChu, filterRef } = useAppContext();
    const [toggleTheme, setToggleTheme] = useState(false);
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
                        onClick={() => setToggleTheme(!toggleTheme)}
                        className={cx("theme")}
                    >
                        {toggleTheme === true ? (
                            <img src={icon.light} />
                        ) : (
                            <img src={icon.dark} />
                        )}
                    </div>
                    <div className={cx("document")} ref={filterRef}>
                        <img
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
