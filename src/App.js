import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import classNames from "classnames/bind";
import Home from "./layouts/Home/Home";
import LessonsVideo from "./layouts/LessonsVideo/LessonsVideo";
import NotFound from "./components/NotFound/NotFound";
import GhiChu from "./layouts/GhiChu/GhiChu";
import { useAppContext } from "./components/context/AppContext";

const cx = classNames.bind();
function App() {
    const { isDarkMode } = useAppContext();
    return (
        <Router>
            <div
                className={cx("App", {
                    dark: isDarkMode,
                })}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/lessons/:lessonsId"
                        element={<LessonsVideo />}
                    ></Route>
                    <Route path="/ghichu" element={<GhiChu />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
