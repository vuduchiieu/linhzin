import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import icon from "../../../assets/icon";
import { Link, useNavigate, useParams } from "react-router-dom";
import img from "../../../assets/img";
import { useEffect, useRef, useState } from "react";
import {
    CHAU_HONG,
    CHI_DUOI,
    CHI_TREN,
    DAU_MAT_CO,
    LONG_NGUC,
    TKTW,
} from "../../../components/categorys/categorys";
import { useAppContext } from "../../../components/context/AppContext";

const cx = classNames.bind(styles);
function Header() {
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();
    const { handleOpen } = useAppContext();

    useEffect(() => {
        if (!searchValue) {
            setResult([]);
            return;
        }
        const filteredResult = [
            ...CHAU_HONG,
            ...CHI_DUOI,
            ...CHI_TREN,
            ...DAU_MAT_CO,
            ...LONG_NGUC,
            ...TKTW,
        ].filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setResult(filteredResult);
    }, [searchValue]);

    return (
        <div className={cx("wrap")}>
            <div className={cx("header")}>
                <Link to={"/"} className={cx("logo")}>
                    <h1>category</h1>
                </Link>
                <Tippy
                    interactive
                    visible={showResult}
                    render={(attrs) => (
                        <div
                            tabIndex="-1"
                            {...attrs}
                            className={cx("seach-result")}
                        >
                            {result.map((item, i) => (
                                <div key={i} className={cx("result")}>
                                    <Link
                                        to={item.to}
                                        onClick={() =>
                                            handleOpen(
                                                item.src,
                                                item.id,
                                                item.title
                                            )
                                        }
                                        className={cx("info")}
                                    >
                                        <h3>{item.title}</h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                    onClickOutside={() => setShowResult(!showResult)}
                >
                    <div className={cx("seach")}>
                        <img src={icon.seach} spellCheck={false} />
                        <input
                            ref={inputRef}
                            value={searchValue}
                            type="search"
                            placeholder="Tìm kiếm bài học..."
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        />
                    </div>
                </Tippy>
                <div className={cx("profile")}>
                    <img src={img.avt} />
                </div>
            </div>
        </div>
    );
}

export default Header;
