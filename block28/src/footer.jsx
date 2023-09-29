import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h4>Go to:</h4>
             <Link to="/home">Home</Link>
             <Link to="/blue">Blue</Link>
             <Link to="/red">Red</Link>
           
        </div>
    )
}

export default Footer;