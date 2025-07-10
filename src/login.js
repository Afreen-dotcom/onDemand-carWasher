import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router";//to switch one to another page
const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const loginUser=(e)=>{
        e.preventDefault();
        const data={email:email,
        password:password};
        fetch('http://localhost:8000/user/login/',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(
            response=>{
                if(response.ok)
                    return response.json();
                else
                    alert('login Failed');
            }
            
        ).then(
            data=>{
                if(data.message==='Invalid Credential'){
                    alert('Invalid credential');
                    return
                }
                console.log('login Successful',data);
                localStorage.setItem('token',data.token);//local storage has 5 mb of space and if we dont clear it will stay till history has been clear
                localStorage.setItem('firstName',data.data);
                //navigate to home page with help of useNavigate()
                    navigate('/');

            }
        ).catch(err=>{
            console.log("error :",err);
            alert("error Occured",err);
            navigate('/login')
        })
        return
    }
    return <form >

        <div className="form-group c">
        <label>Email</label>
        <input type='email' placeholder="Enter email" className="form-control" onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type='password' placeholder="Enter password" className="form-control" onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button type='submit' className="btn btn-primary" onClick={(e)=>loginUser(e)}>Login</button>
    </form>
}

export default Login;