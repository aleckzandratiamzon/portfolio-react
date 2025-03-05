import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirm: '' 
    })

    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleChange = (e)=> {
        comparePassword();
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
            const response = await axios.post("http://localhost:3002/api/addUser", formData);
            if (response.status ===201){
                console.log(response)
                navigate('/resume');
            }
        } catch(err){
            console.log('Error:', err.response.data.message);   
            setError( err.response.data.message);
            const errorPassword = document.getElementById('error-message');
            errorPassword.classList.remove('d-none');
        }
    }

    const comparePassword = ()=>{
        const password = document.getElementById('inputPassword').value;
        const passwordConfirm = document.getElementById('inputPasswordConfirm').value;

        if (password === passwordConfirm){
            const errorPassword = document.getElementById('error-message');
            setError('');
            errorPassword.classList.add('d-none');
            return true;
        }else {
            const errorPassword = document.getElementById('error-message');
            setError('Passwords do not match');
            errorPassword.classList.remove('d-none');
            return false;
        }
    }
  return (
    <>
    <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
        <main>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-7 pt-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                            <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" name='firstname' value={formData.firstName} onChange={handleChange} />
                            <label htmlFor="inputFirstName">First name</label>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-floating">
                            <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" name='lastname' value={formData.lastName} onChange={handleChange}/>
                            <label htmlFor="inputLastName">Last name</label>
                        </div>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" name='email' value={formData.email} onChange={handleChange}/>
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                            <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" name='password' value={formData.password} onChange={handleChange}/>
                            <label htmlFor="inputPassword">Password</label>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-floating mb-3 mb-md-0">
                            <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" name='passwordConfirm' value={formData.passwordConfirm} onChange={handleChange}/>
                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                            
                        </div>
                        </div>
                    </div>
                    <p className='text-danger d-flex justify-content-center d-none' id='error-message'>{error}</p>

                    <div className="mt-4 mb-0">
                        <div className="d-grid">
                            <button type='submit' className="btn btn-primary btn-block" >Create Account</button>
                            </div>
                    </div>
                    </form>
                </div>
                <div className="card-footer text-center py-3">
                    <div className="small"><a><Link to="/login"> Have an account? Go to login </Link></a></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>
    </div>
    </div>
    </>
  )
}

export default Register