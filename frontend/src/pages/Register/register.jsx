import React, { useState } from "react";
import axios from 'axios'
const Register = () => {

    const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "" });
    const [image,setImage]=useState({preview:"",raw:""})
    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setData({ ...data, [name]: value })
    };
    const handleImage=(e)=>{
        let val=e.target.files[0]
        setImage({...image,raw:val,preview:URL.createObjectURL(val)})
    }
    const hanldeClick = (e) => {
        e.preventDefault();
        var body = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        }
        var formdata=new FormData();
        formdata.append('firstname',data.firstname)
        formdata.append('lastname',data.lastname)
        formdata.append('email',data.email)
        formdata.append('password',data.password)
        formdata.append('image',image.raw)
        // ,
        axios.post(import.meta.env.VITE_BASE_URL + "/register", formdata,{headers:{'Content-Type':'multipart/form-data'}}).then((res) => {
            alert("wokring")
        }).catch((err) => console.log(err))
    }
    return (
        <>
            <div className="register-box">
                <img src={image.preview} alt="no image" className="image-view"/>
                <input type="text" className="input-field" name="firstname" placeholder="First name" onChange={handleChange} value={data.firstname} />
                <input type="text" className="input-field" name="lastname" placeholder="Last name" onChange={handleChange} value={data.lastname} />
                <input type="text" className="input-field" name="email" placeholder="Email" onChange={handleChange} value={data.email} />
                <input type="text" className="input-field" name="password" placeholder="Password" onChange={handleChange} value={data.password} />
                <input type="file" className="input-field" name='image'placeholder="Upload image" onChange={handleImage} />

              
                <button className="button" onClick={hanldeClick}>Submit</button>
            </div>

        </>
    )
}

export default Register;