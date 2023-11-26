import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { useAppContext } from "../../components/GlobalStyles/context/AppContext";

const cx = classNames.bind(styles);

function Header() {
    const {
        chauHong,
        toggleChauHong,
        chiDuoi,
        toggleChiDuoi,
        chiTren,
        toggleChiTren,
        dauMatCo,
        toggleDauMatCo,
        longNguc,
        toggleLongNguc,
        TKTW,
        toggleTKTW,
    } = useAppContext();
    return (
        <div className={cx("header")}>
            <button
                className={chauHong === true ? cx("active") : ""}
                onClick={toggleChauHong}
            >
                Chậu Hông
            </button>
            <button
                className={chiDuoi === true ? cx("active") : ""}
                onClick={toggleChiDuoi}
            >
                Chi Dưới
            </button>
            <button
                className={chiTren === true ? cx("active") : ""}
                onClick={toggleChiTren}
            >
                Chi Trên
            </button>
            <button
                className={dauMatCo === true ? cx("active") : ""}
                onClick={toggleDauMatCo}
            >
                Đầu mặt cổ
            </button>
            <button
                className={longNguc === true ? cx("active") : ""}
                onClick={toggleLongNguc}
            >
                Lồng Ngực
            </button>

            <button
                className={TKTW === true ? cx("active") : ""}
                onClick={toggleTKTW}
            >
                TKTW
            </button>
        </div>
    );
}

export default Header;
