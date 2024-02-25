import React from 'react'
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Dropdown = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('token')
        navigate("/");
    }
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "white", color: "rgba(255, 123, 0, 0.824)", border: "none" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaUser />
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" onClick={()=>{navigate("/dashboard")}}>My Profile</a></li>
                <li><a class="dropdown-item" href="#" onClick={()=>{navigate("/update-dashboard")}}>Update Profile</a></li>
                <li><a href="#" class="dropdown-item" onClick={handleLogout}>Logout</a></li>
            </ul>
        </div>
    )
}

export default Dropdown