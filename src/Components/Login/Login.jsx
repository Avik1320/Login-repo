import React from 'react'
import '../Login/Login.css'
import img1 from '../../Assests/Login.jpg'

const Login = () => {
    return (
        <div className='login-main' >
            <div className="login-left">
                <div className="left-content">
                    <div className="loginup-heading">Login</div>
                    <div className="form-main">
                        <form action="" className='form-content'>
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" className='input-field' placeholder='Enter Username' required />
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" className='input-field' placeholder='Enter password' required />
                            <div className='forget-pass'>Forget Password</div>
                            <button className='btn-signup'>Sign Up</button>
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