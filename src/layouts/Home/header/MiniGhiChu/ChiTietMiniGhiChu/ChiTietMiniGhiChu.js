import classNames from "classnames/bind";
import styles from "./ChiTietMiniGhiChu.module.scss";
import icon from "../../../../../assets/icon";
import { useAppContext } from "../../../../../components/context/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function ChiTietMiniGhiChu({ setChiTietMiniGhiChu }) {
    const { setRefreshData } = useAppContext();
    const [newGhiChu, setNewGhiChu] = useState({
        id: "",
        title: "",
        desc: "",
    });
    const handleSave = async () => {
        try {
            await axios.post(
                "https://be-linhzin.vercel.app/api/v1/create",
                newGhiChu
            );
            setNewGhiChu({
                title: "",
                desc: "",
            });
            setChiTietMiniGhiChu(false);
            setRefreshData(true);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        return () => {
            if (isMounted) {
                setChiTietMiniGhiChu(false);
            }
        };
    }, [isMounted]);
    return (
        <div className={cx("chi-tiet")}>
            <div className={cx("header")}>
                <div className={cx("back")}></div>
                <div onClick={handleSave} className={cx("save")}>
                    <img src={icon.save} />
                </div>
            </div>

            <div className={cx("ghichu")}>
                <div className={cx("title")}>
                    <textarea
                        placeholder="Tiêu đề"
                        wrap="hard"
                        value={newGhiChu.title}
                        onChange={(e) => {
                            setNewGhiChu({
                                ...newGhiChu,
                                title: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className={cx("desc")}>
                    <textarea
                        placeholder="Nội dung viết ở đây"
                        wrap="hard"
                        value={newGhiChu.desc}
                        onChange={(e) => {
                            setNewGhiChu({
                                ...newGhiChu,
                                desc: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChiTietMiniGhiChu;
