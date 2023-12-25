import classNames from "classnames/bind";
import styles from "./chitiet.module.scss";
import icon from "../../../assets/icon";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function ChiTiet({ setChiTiet, ghichu }) {
    const [newGhiChu, setNewGhiChu] = useState({
        id: ghichu.id,
        title: ghichu.title,
        desc: ghichu.desc,
    });
    const handleSave = async () => {
        if (ghichu.id === undefined) {
            try {
                await axios.post(
                    "https://be-linhzin.vercel.app/api/v1/create",
                    newGhiChu
                );
                setNewGhiChu({
                    title: "",
                    desc: "",
                });
                window.location.href = "/ghichu";
            } catch (error) {
                console.error("Error creating user:", error);
            }
        } else if (ghichu.id !== undefined) {
            try {
                await axios.put(
                    "https://be-linhzin.vercel.app/api/v1/update",
                    newGhiChu
                );
                window.location.href = "/ghichu";
            } catch (error) {
                console.error("Error creating user:", error);
            }
        }
    };

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        return () => {
            if (isMounted) {
                setChiTiet(false);
            }
        };
    }, [isMounted]);
    return (
        <div className={cx("chi-tiet")}>
            <div className={cx("header")}>
                <div
                    onClick={() => {
                        setChiTiet(false);
                    }}
                    className={cx("back")}
                >
                    <img src={icon.back} />
                </div>
                <div className={cx("save")} onClick={handleSave}>
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

export default ChiTiet;
