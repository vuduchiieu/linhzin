import React from "react";

import classNames from "classnames/bind";

import styles from "./listText.module.scss";

const cx = classNames.bind(styles);

function ListText({ lessonsData }) {
    return (
        <div className={cx("lessons")}>
            <div className={cx("main")}>
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        <iframe
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            src="https://drive.google.com/file/d/1LdxcPgcJ50FSOPbEg61B6fH7mjzlYndV/preview"
                        ></iframe>
                    </div>
                    <div className={cx("title")}>
                        <h3></h3>
                    </div>
                </div>

                <div className={cx("nav-bar")}>
                    <div className={cx("wrap")}>
                        {lessonsData.map((item) => (
                            <button key={item.id} className={cx("button")}>
                                <p>{item.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListText;
