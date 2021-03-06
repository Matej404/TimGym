import "./trainer.css";
import Tim from "./Tim.jpg";
import { Fade } from "react-reveal";

export default function Trainer() {

    return(
        <div className="trainer">
            <h2 className="trainer-headline">MEET YOUT TRAINER</h2>
            <div className="trainer-container">
                <h3>Tim Newton</h3>
                <Fade>
                    <p>
                        <div className="trainer-img">
                            <img src={Tim} />
                        </div>
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected 
                        humour, or randomised words which don't look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure 
                        there isn't anything embarrassing hidden in the middle of text. All 
                        the Lorem Ipsum generators on the Internet tend to repeat predefined 
                        chunks as necessary, making this the first true generator on the Internet. 
                        It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected 
                        humour, or randomised words which don't look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, you need to be sure 
                        there isn't anything embarrassing hidden in the middle of text. All 
                        the Lorem Ipsum generators on the Internet tend to repeat predefined 
                        chunks as necessary, making this the first true generator on the Internet. 
                        It uses a dictionary of over 200 Latin words, combined with a handful of 
                        model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                        The generated Lorem Ipsum is therefore always free from repetition, injected 
                        humour, or non-characteristic words etc.
                        
                    </p>
                    </Fade>
            </div>
        </div>
    )
}