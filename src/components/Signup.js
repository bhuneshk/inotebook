import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({username:"",email: "", password: ""});
  let history=useNavigate();
  const handlesubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://127.0.0.1:5000/api/auth/createuser`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({name:credentials.username,email:credentials.email, password:credentials.password})
      })
      const json =  await response.json();
      console.log(json);
      if(json.success){
          sessionStorage.setItem('token',json.authtoken);
          props.showAlert("Registered Successfully","success")
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
    <div className='container'>
      <form onSubmit={handlesubmit}>
      <div className="mb-3 my-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username"  name="username" onChange={handleChange} />
            </div>
            <div className="mb-3 ">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup
