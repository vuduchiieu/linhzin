import classNames from "classnames/bind";
import styles from "./miniDocument.module.scss";
import icon from "../../../../assets/icon";
import { useEffect } from "react";
import { useRef } from "react";

const cx = classNames.bind(styles);

const ghichu = [
    {
        title: "abc",
        desc: "abcs",
    },
    {
        title: "abc2",
        desc: "abcs",
    },
    {
        title: "abc3",
        desc: "abcs",
    },
    {
        title: "abc3",
        desc: "abcs",
    },
    {
        title: "abc3",
        desc: "abcs",
    },
    {
        title: "abc3",
        desc: "abcs",
    },
    {
        title: "abc3",
        desc: "abcs",
    },
];

function MiniDocument({ setDocument }) {
    const filterRef = useRef(null);
    const handleClickOutside = (e) => {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            setDocument(false);
        }
    };
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                setDocument(false);
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
        <div className={cx("mini-document")}>
            <div className={cx("header")}>
                <h3>Ghi chú</h3>
                <img
                    onClick={() => {
                        setDocument(false);
                    }}
                    src={icon.close}
                />
            </div>
            <div className={cx("wrap")}>
                {ghichu.map((item, i) => (
                    <div className={cx("content")} key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className={cx("select-all")}>
                <p>xem tất cả</p>
            </div>
        </div>
    );
}

export default MiniDocument;
