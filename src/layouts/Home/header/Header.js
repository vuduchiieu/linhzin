import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import img from "../../../assets/img";
import Search from "./Search/Search";
import icon from "../../../assets/icon";
import { useState } from "react";
import MiniDocument from "./MiniDocument/MiniDocument";

const cx = classNames.bind(styles);
function Header() {
    const [document, setDocument] = useState(false);
    return (
        <div className={cx("wrap")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <h1>category</h1>
                </Link>
                <div className={cx("search")}>
                    <Search />
                </div>
                <div className={cx("document")}>
                    <img
                        onClick={() => {
                            setDocument(!document);
                        }}
                        src={icon.document}
                        alt=""
                    />
                    {document && (
                        <div className={cx("popper")}>
                            <MiniDocument setDocument={setDocument} />
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
