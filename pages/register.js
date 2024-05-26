import {useState} from 'react'
import axios from 'axios';
const Register = ( )=> {
    const handleSubmit= async(e) => {
        e.preventDefault();
        // console.log({name, email, password})
        const {data} = await axios.post(`http://localhost:8000/api/register`,{name,email,password});
        console.log("Register response",data)
    }
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
    <>
    <h1 className="jumbotron bg-primary square text-center">Register Page</h1>
    <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="form-control mb-4 p-4" 
            value={name} 
            onChange={e => setName(e.target.value)}
            placeHolder="Enter name"
            required></input>

            <input 
                type="text" 
                className="form-control mb-4 p-4" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeHolder="Enter Email"
                required>
            </input>

            <input 
                type="password" 
                className="form-control mb-4 p-4" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeHolder="Enter password"
                required>
            </input>

            <br/>

            <div style={{display:"flex",justifyContent:"center"}}><button type="submit" className="btn btn-block btn-primary " style={{width:"100%"}}>Submit</button></div>
            
        </form>

    </div>
    </>)
}
export default Register;