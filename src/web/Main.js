import "./style.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import About from "./about/About";
import Features from "./features/Features";
import Contact from "./contact/Contact";
import Trainer from "./trainer/Trainer";

export default function Main() {

    return(
        <div>
            <Sidebar />
            <main>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/trainer" element={<Trainer />} />
                </Routes>
            </main>
        </div>
    )
}