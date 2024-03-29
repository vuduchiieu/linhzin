import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import img from "../../assets/img";

import styles from "./notFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {
    const navigate = useNavigate();
    const [timeOut, setTimeOut] = useState(8);
    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeOut((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
    timeOut === 0 && navigate("/");
    return (
        <div className={cx("not-found")}>
            <img src={img.notFound} />
            <p>
                Back to{" "}
                <span
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Home
                </span>{" "}
                {timeOut}s
            </p>
        </div>
    );
}

export default NotFound;
