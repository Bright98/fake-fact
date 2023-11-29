import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ArticlePage, HomePage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/article" element={<ArticlePage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
