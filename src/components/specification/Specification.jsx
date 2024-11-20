import './Specification.css';

import checkIcon from "../../assets/check.png";
import minusIcon from "../../assets/minus.png";

function Specification( {name, applicable} ) {
    return (
        <div className="specification">
            <span className="icon">
                {applicable ? <img src={checkIcon} alt="yes" /> : <img src={minusIcon} alt="no" />}
            </span>
            <p>{name}</p>
        </div>
    )
}

export default Specification;