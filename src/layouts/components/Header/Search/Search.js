import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./search.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../../components/context/AppContext";
import icon from "../../../../assets/icon";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();
    const {
        handleOpen,
        chauHong,
        chiDuoi,
        chiTren,
        dauMatCo,
        longNguc,
        thanKinhTrungUong,
    } = useAppContext();
    useEffect(() => {
        if (!searchValue) {
            setResult([]);
            return;
        }
        const filteredResult = [
            ...chauHong,
            ...chiDuoi,
            ...chiTren,
            ...dauMatCo,
            ...longNguc,
            ...thanKinhTrungUong,
        ].filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setResult(filteredResult);
    }, [searchValue]);

    return (
        <Tippy
            interactive
            placement="bottom-end"
            visible={showResult}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs} className={cx("seach-result")}>
                    {result.map((item, i) => (
                        <div key={i} className={cx("result")}>
                            <Link
                                to={item.to}
                                onClick={() =>
                                    handleOpen(
                                        item.src,
                                        item.id,
                                        item.title,
                                        setShowResult(!showResult),
                                        setSearchValue("")
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
                    spellCheck="false"
                    ref={inputRef}
                    value={searchValue}
                    type="search"
                    placeholder="Tìm kiếm bài học..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
            </div>
        </Tippy>
    );
}

export default Search;
