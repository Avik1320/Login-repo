import React, { useEffect, useState } from 'react'
import '../Dashboard/Dashboard.css'
import Cookies from 'js-cookie';
import { redirect, useNavigate } from 'react-router-dom';
import Dropdown from '../Common/Dropdown';


const Dashboard = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async (token) => {
        const tokenResponse = await fetch(`https://employee-app-3tf1.onrender.com/auth/verification`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'token': token
            }
        });
        if (tokenResponse.status === 200) {

            const tokenJson = await tokenResponse.json();
            const response = await fetch(`https://employee-app-3tf1.onrender.com/api/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': Cookies.get("token")
                }
            });
            const json = await response.json();
            setFormdata(json.data);
            setLoading(false)
        }
        else{
            navigate("/login")
        }
    }

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) navigate("/login")
        //Runs only on the first render
        fetchData(token);
    }, []);




    return (
        <div className='dashboard-main'>
            <div className="dash-header">
                <div className="dashitems">
                    User Dashboard
                </div>
                <Dropdown/>
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