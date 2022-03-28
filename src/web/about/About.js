import "./about.css";
import Gym from "./gym.jpg";
import { imgData } from "./ImgData";
import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

export default function About() {
    const [popUp, setPopUp] = useState("");

    const handlePopUp = (e, id) => {
        setPopUp(id);
    }

    const handleRemovePopUp = () => {
        setPopUp("")
    }

    //slide
    const [current, setCurrent] = useState(0);

    const prevBtn = () => {
        setCurrent(current === 0 ? imgData.length - 1 : current - 1);
    }

    const nextBtn = () => {
        setCurrent(current === imgData.length - 1 ? 0 : current + 1);
    }

    return(
        <div className="about">
            <h2 className="about-headline">ABOUT US</h2>
            <div className="about-container">
                
                <div className="about-img">
                    <img src={Gym} />
                </div>
                <div className="about-content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <Link to="photos" spy={true} smooth={true}>
                <div className="view-photos">
                    VIEW PHOTOS
                </div>
            </Link>
            <div className="photos" id="photos">
            <div className="photos-container">
                {imgData.map((image, index) => {
                    const {id, img} = image;
                    return(
                        <div key={id}>
                            <div className="single-photo" onClick={(e) => handlePopUp(e, id)}>
                                <img src={img} />
                            </div>
                            {popUp === id && (
                                <div key={id} className="popUp-img">
                                    <AiOutlineClose className="btn-close" onClick={() => handleRemovePopUp()} />
                                    <RiArrowLeftSLine className="btn-left" onClick={prevBtn} />
                                    <RiArrowRightSLine className="btn-right" onClick={nextBtn} />
                                    {imgData.map((image, index) => (
                                        <div key={index}>
                                            {index === current && (
                                                <img src={image.img} />
                                            )}
                                            
                                        </div>
                                    ))}
                                </div>
                            )}   
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}