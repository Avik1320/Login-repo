import React from 'react'
import '../Dashboard/Dashboard.css'
import { FaUser } from "react-icons/fa6";


const Dashboard = () => {
    return (
        <div className='dashboard-main'>
            <div className="dash-header">
                <div className="dashitems">
                    User Dashboard
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style={{backgroundColor:"white", color:"rgba(255, 123, 0, 0.824)", border:"none"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUser/>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">My Profile</a></li>
                        <li><a class="dropdown-item" href="#">Update Profile</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
            <div className="dash-body">
                <h1 className='dash-heading'>My Profile</h1>
                <div className="dash-main-body">
                    <div className="row1">
                        <div className="item-name">First Name:</div>
                        <div className="item-content">Avik</div>
                        <div className="item-name">Last Name:</div>
                        <div className="item-content">Ghosh</div>
                    </div>
                    <div className="row2">
                        <div className="item-name" style={{ paddingRight: "1rem" }}>Email:</div>
                        <div className="item-content">avikghosh@gmail.com</div>
                    </div>
                    <div className="row2">
                        <div className="item-name" style={{ paddingRight: "1rem" }}>Ph-no:</div>
                        <div className="item-content">8513988435</div>
                    </div>
                    <div className="row2">
                        <div className="item-name" style={{ paddingRight: "1rem" }}>Address:</div>
                        <div className="item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis, veniam mollitia officia quos earum nobis culpa temporibus natus dolorum!</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard