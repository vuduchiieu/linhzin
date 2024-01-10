import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
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
                    <Route exact={true} path="/" element={<Home />} />
                    <Route
                        exact={true}
                        path="/lessons/:lessonsId"
                        element={<LessonsVideo />}
                    ></Route>
                    <Route exact={true} path="/ghichu" element={<GhiChu />} />
                    <Route exact={true} path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
