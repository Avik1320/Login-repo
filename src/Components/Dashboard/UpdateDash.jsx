import React, { useEffect, useState } from 'react'
import '../Dashboard/Updatedash.css'
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Common/Dropdown';
import Cookies from 'js-cookie';


const UpdateDash = () => {

    let navigate = useNavigate();
    const [formdata, setFormdata] = useState({});
    const [loading, setLoading] = useState(false);
    const [uloading, setUloading] = useState(false);



    const fetchData = async (token) => {
        setLoading(true)

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
        }
        else {
            navigate("/login")
        }
        setLoading(false)

    }



    const onChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }


    const handleUpdate = async () => {
        setUloading(true)
        const response = await fetch(`https://employee-app-3tf1.onrender.com/api/user/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': Cookies.get("token")
            },
            body: JSON.stringify(
                {
                    first_name: formdata.first_name,
                    last_name: formdata.last_name,
                    email: formdata.email,
                    phone: formdata.phone,
                    address: formdata.address
                }
            )
        });
        // console.log(data);
        const json = await response.json();
        if (response.status == 200) navigate("/")
        setUloading(false)
    }

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) navigate("/login")
        //Runs only on the first render
        fetchData(token);
    }, []);



    return (
        <div className='update-dash'>

            <div className="dash-header">
                <div className="dashitems">
                    User Dashboard
                </div>
                <Dropdown />
            </div>

            {
                loading ?
                    "loading"
                    :
                    <>
                        <div className="update-dash-main">
                            <h1 className='dash-heading'>Update User's Details</h1>
                            <form action="" className='form-body'>

                                <label htmlFor="">First Name</label>
                                <input value={formdata.first_name} onChange={onChange} type="text" name='fname' className='input-field' placeholder='Enter your First Name' required />
                                
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="lname" value={formdata.last_name} onChange={onChange} className='input-field' placeholder='Enter your Last Name' required />
                                
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" value={formdata.email} className='input-field' onChange={onChange}  placeholder='Enter Your Email' required />
                                
                                <label htmlFor="">Ph-No</label>
                                <input type="tel" name="phno" value={formdata.phone} onChange={onChange} className='input-field' placeholder='Enter your Ph-no' required />
                                
                                <label htmlFor="">Address</label>
                                <textarea className='input-field' name='address' value={formdata.address} onChange={onChange}required />


                            </form>
                        </div>
                        <button className="button-update">Update
                            {
                                uloading ?
                                    "Loading ..."
                                    :
                                    "Update"
                            }
                        </button>
                    </>
            }
        </div >
    )
}

export default UpdateDash