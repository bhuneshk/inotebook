import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let history=useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://127.0.0.1:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        })
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Logged in Successfully","success")
            history('/');
        }
        else{
            props.showAlert(json.error,"danger");
        }
    }
    const handleChange=(e)=>{
          setCredentials({...credentials,[e.target.name]: e.target.value});
    }
    return (
        <form onSubmit={handlesubmit}>
            <div className="mb-3 my-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login
