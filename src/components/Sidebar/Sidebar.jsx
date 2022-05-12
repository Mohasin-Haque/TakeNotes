import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    return(
        <div>
        <div className="items">
            <Link to="/home" className="item"><i className="fa fa-house icon-margin"></i>Home</Link>
            <Link to="/archive" className="item"><i className="fa fa-box-archive icon-margin"></i>Archive</Link>
            <Link to="/trash" className="item"><i className="fa fa-trash-can icon-margin"></i>Trash</Link>
            <Link to="/profile" className="item"><i className="fa fa-user icon-margin"></i>Profile</Link>
    </div>
        </div>
    )
}

export { Sidebar }