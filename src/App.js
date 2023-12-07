import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home/Home";
import LessonsVideo from "./layouts/LessonsVideo/LessonsVideo";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/lessons/:lessonsId"
                        element={<LessonsVideo />}
                    ></Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
