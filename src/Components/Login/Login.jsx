import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import img1 from '../../Assests/Login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        "username": "",
        "password": ""
    });

    const checktkn = async () => {
        const tkn = Cookies.get("token");
        if (tkn) {
            const tknresponse = await fetch(`https://employee-app-3tf1.onrender.com/auth/verification`, {
                method: 'GET',
                headers: {
                    'token': tkn
                }
                
            });
            // console.log(tknresponse)


            if (tknresponse.status === 200) {
                navigate("/dashboard")
            }
        }
    }

    useEffect(() => {
        checktkn();
    }, []);


    const handleClick = async (e) => {
        e.preventDefault();
        console.log(formdata);
        setLoading(true)
        const response = await fetch(`https://employee-app-3tf1.onrender.com/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: formdata.username,
                    password: formdata.password
                }
            )
        });
        console.log(response)
        const json = await response.json();
        console.log(json);
        if (response.status === 200 && json.token) {
            Cookies.set("token", json.token);
            navigate("/dashboard")
        }
        else {
            alert(json.msg)
        }
        setLoading(false)
    }

    const onChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <div className='login-main' >
            <div className="login-left">
                <div className="left-content">
                    <div className="loginup-heading">Login</div>
                    <div className="form-main">
                        <form action="" className='form-content'>

                            <label htmlFor="">Username</label>
                            <input type="text" name="username" className='input-field' onChange={onChange} placeholder='Enter Username' required />

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className='input-field' onChange={onChange} placeholder='Enter password' required />

                            <Link style={{ textDecoration: "none" }} to="/forget-password"><div className='forget-pass'>Forget Password ?</div></Link>
                            <button className='btn-loginup' onClick={handleClick}>
                                {
                                    loading ?
                                        "Loading.."
                                        :
                                        "Login"
                                }
                            </button>
                            {/* <button className='btn-loginup' onClick={handleClick}>Login</button> */}

                            <div className='signup-page'>
                                <div className="sigup-content">Don't have an account? <Link style={{ textDecoration: "none" }} to="/SignUp"><span className='signup-btn'>SignUp</span></Link></div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <div className="login-right">
                <div className="login-img">
                    <img src={img1} alt="" className='loginimg' />
                </div>
            </div>

        </div>
    )
}

export default Login