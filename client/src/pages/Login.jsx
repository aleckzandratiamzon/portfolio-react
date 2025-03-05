import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleChange = (e)=> {
        setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        console.log(formData);
        }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log('Form Submitted');
        try{
            const response = await axios.post("http://localhost:3002/api/login", formData);
            if (response.status ===200){
                console.log(response.data.message)
                navigate('/resume');
            }
        } catch(err){
            console.log('Error:', err.response.data.message);   
            setError( err.response.data.message);
            const errorPassword = document.getElementById('error-message');
            errorPassword.classList.remove('d-none');
        }
    }

  return (
    <>
    <div>
        <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-5 pt-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" name='email' onChange={handleChange}/>
                            <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="inputPassword" type="password" placeholder="Password" name='password' onChange={handleChange}/>
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        <p className='text-danger d-flex justify-content-center d-none' id='error-message'>{error}</p>
                        {/* <div className="form-check mb-3">
                            <input className="form-check-input" id="inputRememberPassword" type="checkbox" defaultValue />
                            <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                        </div> */}
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small" href="password.html">Forgot Password?</a>
                            <button className="btn btn-primary" type='submit'>Login</button>
                            
                        </div>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <div className="small"><Link to="/register"> <a>Need an account? Sign up!</a></Link></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login