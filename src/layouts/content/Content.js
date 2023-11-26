import classNames from "classnames/bind";
import styles from "./content.module.scss";
import ChauHong from "./category/ChauHong";
import ChiDuoi from "./category/ChiDuoi";
import ChiTren from "./category/ChiTren";
import DauMatCo from "./category/DauMatCo";
import LongNguc from "./category/LongNguc";
import TkTw from "./category/TKTW";
import { useAppContext } from "../../components/GlobalStyles/context/AppContext";

const cx = classNames.bind(styles);
function Content() {
    const { chauHong, chiDuoi, chiTren, dauMatCo, longNguc, TKTW } =
        useAppContext();
    return (
        <div className={cx("content")}>
            <div className={cx("category")}>
                {chauHong === true ? (
                    <ChauHong />
                ) : chiDuoi === true ? (
                    <ChiDuoi />
                ) : chiTren === true ? (
                    <ChiTren />
                ) : dauMatCo === true ? (
                    <DauMatCo />
                ) : longNguc === true ? (
                    <LongNguc />
                ) : TKTW === true ? (
                    <TkTw />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Content;
