import React, { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames/bind";

import icon from "../../../assets/icon";
import img from "../../../assets/img";

import styles from "./chitiet.module.scss";

import { useAppContext } from "../../../components/context/AppContext";

const cx = classNames.bind(styles);

function ChiTiet({ setChiTiet, ghichu }) {
    const { setRefreshData, isLoading, setIsLoading } = useAppContext();
    const [newGhiChu, setNewGhiChu] = useState({
        id: ghichu.id,
        title: ghichu.title,
        desc: ghichu.desc,
    });
    const handleSave = async () => {
        if (ghichu.id === undefined) {
            try {
                setIsLoading(true);
                await axios.post(
                    "https://be-linhzin.vercel.app/api/v1/create",
                    newGhiChu
                );
                setNewGhiChu({
                    title: "",
                    desc: "",
                });
                setRefreshData(true);
                setChiTiet(false);
            } catch (error) {
                console.error("Error creating user:", error);
            } finally {
                setIsLoading(false);
            }
        } else if (ghichu.id !== undefined) {
            try {
                setIsLoading(true);
                await axios.put(
                    "https://be-linhzin.vercel.app/api/v1/update",
                    newGhiChu
                );
                setRefreshData(true);
                setChiTiet(false);
            } catch (error) {
                console.error("Error creating user:", error);
            } finally {
                setIsLoading(false);
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
                    {isLoading ? (
                        <img src={img.loading} />
                    ) : (
                        <img className={cx("save-icon")} src={icon.save} />
                    )}
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
