import "./style.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import About from "./about/About";

export default function Main() {

    return(
        <div>
            <Sidebar />
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </div>
    )
}