import classNames from "classnames/bind";
import styles from "./miniGhiChu.module.scss";
import icon from "../../../../assets/icon";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../components/context/AppContext";

const cx = classNames.bind(styles);

function MiniGhiChu({ setTogleGhiChu }) {
    const navigate = useNavigate();
    const { listGhiChu, setChiTiet, setGhiChu } = useAppContext();
    const handleChiTiet = (i) => {
        setGhiChu(listGhiChu[i]);
        setChiTiet(true);
        navigate("/ghichu");
    };

    return (
        <div className={cx("mini-document")}>
            <div className={cx("header")}>
                <div className={cx("warp-header")}>
                    <Link to={"/ghichu"}>
                        <h3>Ghi chú</h3>
                    </Link>
                    <Link
                        to={"/ghichu"}
                        onClick={() => {
                            setGhiChu([]);
                            setChiTiet(true);
                        }}
                        className={cx("ghi-chu-moi")}
                    >
                        <img src={icon.add} />
                    </Link>
                </div>
                <img
                    onClick={() => {
                        setTogleGhiChu(false);
                    }}
                    src={icon.close}
                />
            </div>
            <div className={cx("wrap")}>
                {listGhiChu.map((item, i) => (
                    <div
                        onClick={() => handleChiTiet(i)}
                        className={cx("content")}
                        key={i}
                    >
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
