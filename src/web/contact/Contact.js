import "./contact.css";
import Location from "./location.jpg";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {

    return(
        <div className="contact">
            <h1>CONTACT US</h1>
            <div className="contact-information-container">
                <div className="contact-information">
                    <p><a href="https://www.facebook.com/LB44Fitness" target="_blank"><FaFacebook className="facebook" /></a></p>
                </div>
                    <div className="contact-information">
                        <p>tel: <a href="tel:+447759730283">+447759730283</a></p>
                    </div>
                    <div className="contact-information">
                        <p>email: <a href="mailto:tim@lb44.co.uk" target="_blank">timnewton@gmail.com</a></p>
                    </div>
                    <div className="contact-information">
                        <p> adress: 240 Blackfriars Road SE1 8BF</p>
                    </div>
                </div>
            <div className="location">
                <img src={Location} />
            </div>
            
        </div>
    )
}