import classNames from "classnames/bind";
import styles from "./HeaderLessons.module.scss";
import { Link, useParams } from "react-router-dom";
import icon from "../../../assets/icon";
import { useAppContext } from "../../../components/context/AppContext";
import Search from "../../Home/header/Search/Search";
import img from "../../../assets/img";
const cx = classNames.bind(styles);

function HeaderLessons({ title }) {
    const { setSelectedVideo, setSelecTitle, setActive } = useAppContext();
    const handleClose = () => {
        setSelectedVideo(null);
        setSelecTitle(null);
        setActive(null);
    };
    return (
        <div className={cx("header-lessons")}>
            <Link onClick={handleClose} to={"/"} className={cx("title")}>
                <div className={cx("back")}>
                    <img src={icon.back} />
                </div>
                <h3>{title}</h3>
            </Link>
            <div className={cx("search")}>
                <Search />
            </div>
            <div className={cx("profile")}>
                
            </div>
        </div>
    );
}

export default HeaderLessons;
