import React from 'react'
import '../SignUp/SignUp.css'
import img1 from '../../Assests/SignUpimg1.jpg'

const SignUp = () => {
    return (
        <div className='signup-main'>
            <div className="signup-left">
                <div className="signup-heading">Sign Up</div>
                <div className="form-main">
                    <form action="" className='form-content'>
                        {/* <div className="row1"> */}
                            <label htmlFor="">First Name</label>
                            <input type="text" name='fname' className='input-field' placeholder='Enter your First Name' required/>
                            <label htmlFor="">Last Name</label>
                            <input type="text" name="lname" className='input-field' placeholder='Enter your Last Name' required/>
                        {/* </div> */}
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" className='input-field' placeholder='Enter Your Email' required/>
                        <label htmlFor="">Ph-No</label>
                        <input type="tel" name="phno" className='input-field' placeholder='Enter your Ph-no' required/>
                        <label htmlFor="">Address</label>
                        <textarea className='input-field' required/>
                        <label htmlFor="">Username</label>
                        <input type="text" name="username" className='input-field' placeholder='Enter Username' required/>
                        <label htmlFor="Password">Password</label>
                        <input type="password" name="password" className='input-field' placeholder='Enter password' required/>
                        <button className='btn-signup'>Sign Up</button>
                    </form>
                </div>

            </div>
            <div className="signup-right">
                <div className="img">
                    <img src={img1} alt="" className='signupimg' />
                </div>
            </div>
        </div>
    )
}

export default SignUp