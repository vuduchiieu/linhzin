import classNames from "classnames/bind";
import styles from "./miniGhiChu.module.scss";
import icon from "../../../../assets/icon";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../components/context/AppContext";

const cx = classNames.bind(styles);

function MiniGhiChu({ setGhiChu }) {
    const { listGhiChu } = useContext(AppContext);

    return (
        <div className={cx("mini-document")}>
            <div className={cx("header")}>
                <Link to={"/ghichu"}>
                    <h3>Ghi chú</h3>
                </Link>
                <img
                    onClick={() => {
                        setGhiChu(false);
                    }}
                    src={icon.close}
                />
            </div>
            <div className={cx("wrap")}>
                {listGhiChu.map((item, i) => (
                    <div className={cx("content")} key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className={cx("select-all")}>
                <Link to={"/ghichu"}>
                    <p>xem tất cả</p>
                </Link>
            </div>
        </div>
    );
}

export default MiniGhiChu;
