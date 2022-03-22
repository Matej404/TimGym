import "./features.css";
import equipment1 from "./images/1.svg";
import equipment2 from "./images/2.svg";
import equipment3 from "./images/3.svg";
import equipment4 from "./images/4.svg";

export default function Features() {

    return(
        <div className="features">
            <h2 className="features-headline">FEATURES</h2>
            <div className="features-container">
                <div className="features-item">
                    <img src={equipment1} />
                    <h3>Weight Lifting</h3>
                </div>
                <div className="features-item">
                    <img src={equipment2} />
                    <h3>Machines</h3>
                </div>
                <div className="features-item">
                    <img src={equipment3} />
                    <h3>Dumbbells</h3>
                </div>
                <div className="features-item">
                    <img src={equipment4} />
                    <h3>Cardio machines</h3>
                </div>
            </div>
        </div>
    )
}