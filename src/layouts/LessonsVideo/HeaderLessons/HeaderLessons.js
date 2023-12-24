import classNames from "classnames/bind";
import styles from "./HeaderLessons.module.scss";
import { Link } from "react-router-dom";
import icon from "../../../assets/icon";
import { useAppContext } from "../../../components/context/AppContext";
import Search from "../../Home/header/Search/Search";
import img from "../../../assets/img";
import MiniGhiChu from "../../Home/header/MiniGhiChu/MiniGhiChu";
const cx = classNames.bind(styles);

function HeaderLessons({ title }) {
    const {
        setSelectedVideo,
        setSelecTitle,
        setActive,
        togleGhiChu,
        setTogleGhiChu,
        filterRef,
    } = useAppContext();
    const handleClose = () => {
        setSelectedVideo(null);
        setSelecTitle(null);
        setActive(null);
    };
    return (
        <div className={cx("header-lessons")}>
            <Link onClick={handleClose} to={"/"} className={cx("title")}>
                <div className={cx("back")}>
                    <img src={icon.backLesson} />
                </div>
                <h3>{title}</h3>
            </Link>
            <div className={cx("document")} ref={filterRef}>
                <img
                    onClick={() => {
                        setTogleGhiChu(!togleGhiChu);
                    }}
                    src={icon.documentLesson}
                />
                {togleGhiChu && (
                    <div className={cx("popper")}>
                        <MiniGhiChu setTogleGhiChu={setTogleGhiChu} />
                    </div>
                )}
            </div>
            <div className={cx("search")}>
                <Search />
            </div>
            <div className={cx("profile")}>
                <img src={img.avt} />
            </div>
        </div>
    );
}

export default HeaderLessons;
