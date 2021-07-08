import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

function AddUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: '',
        phone: ''
    })
    let history =useHistory()

    const {name, username, email, phone} = user
    
    const onInputChange = e =>{
        setUser({...user, [e.target.name] : e.target.value })
    }
    const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3002/users",user)
        history.push('/home')
    }
    return (
        <div className='container'>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg my-3"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    required
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg my-3"
                    placeholder="Enter Your Username"
                    name="username"
                    value={username}
                    required
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    className="form-control form-control-lg my-3"
                    placeholder="Enter Your E-mail Address"
                    name="email"
                    value={email}
                    required
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg my-3"
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    value={phone}
                    required
                    onChange={e => onInputChange(e)}
                    />
                </div>
                <button className="btn btn-primary btn-block ">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser