import React from 'react'
import '../Dashboard/Updatedash.css'
import { FaUser } from "react-icons/fa6";


const UpdateDash = () => {
    return (
        <div className='update-dash'>

            <div className="dash-header">
                <div className="dashitems">
                    User Dashboard
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "white", color: "rgba(255, 123, 0, 0.824)", border: "none" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUser />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">My Profile</a></li>
                        <li><a class="dropdown-item" href="#">Update Profile</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
            <div className="update-dash-main">
                <h1 className='dash-heading'>Update User's Details</h1>
                <form action="" className='form-body'>
                    <label htmlFor="">First Name</label>
                    <input type="text" name='fname' className='input-field' placeholder='Enter your First Name' required />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lname" className='input-field' placeholder='Enter your Last Name' required />
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" className='input-field' placeholder='Enter Your Email' required />
                    <label htmlFor="">Ph-No</label>
                    <input type="tel" name="phno" className='input-field' placeholder='Enter your Ph-no' required />
                    <label htmlFor="">Address</label>
                    <textarea className='input-field' required />
                </form>
            </div>
            <button className="button-update">Update</button>
        </div>
    )
}

export default UpdateDash