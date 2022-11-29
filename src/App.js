import "./App.css";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header title="TODO APP" />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
