import classNames from "classnames/bind";
import styles from "./ghichu.module.scss";
import Header from "../components/Header/Header";
import { useAppContext } from "../../components/context/AppContext";
import ChiTiet from "./ChiTiet/ChiTiet";
import icon from "../../assets/icon";
import axios from "axios";

const cx = classNames.bind(styles);

function GhiChu() {
    const {
        listGhiChu,
        ghichu,
        setGhiChu,
        chitiet,
        setChiTiet,
        setRefreshData,
    } = useAppContext();

    const handleChiTiet = (i) => {
        setGhiChu(listGhiChu[i]);
        setChiTiet(true);
    };

    const handleXoa = async (i) => {
        if (window.confirm("Chắc chắn xóa?")) {
            try {
                await axios.delete(
                    `https://be-linhzin.vercel.app/api/v1/delete/${i}`
                );
                setRefreshData(true);
            } catch (error) {
                console.error("Error creating user:", error);
            }
        }
    };
    return (
        <div className={cx("ghichu")}>
            <Header />
            <div className={cx("wrap")}>
                <div className={cx("content")}>
                    {chitiet === true ? (
                        <ChiTiet setChiTiet={setChiTiet} ghichu={ghichu} />
                    ) : (
                        <div>
                            <div
                                onClick={() => {
                                    setGhiChu([]);
                                    setChiTiet(true);
                                }}
                                className={cx("ghi-chu-moi")}
                            >
                                <button>
                                    <img src={icon.add} />
                                </button>
                                <p>Ghi chú mới</p>
                            </div>
                            <div className={cx("wrap-list")}>
                                {listGhiChu.map((item, i) => (
                                    <div className={cx("list-ghi-chu")} key={i}>
                                        <div
                                            onClick={() => {
                                                handleChiTiet(i);
                                            }}
                                            className={cx("ghichu")}
                                        >
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className={cx("action")}>
                                            <button
                                                onClick={() => {
                                                    handleChiTiet(i);
                                                }}
                                            >
                                                <img src={icon.edit} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleXoa(item.id);
                                                }}
                                            >
                                                <img src={icon.delete} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GhiChu;
