import axios from 'axios'
import React, {useState , useEffect} from 'react'
import { useHistory ,useParams } from 'react-router-dom'

function EditUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: '',
        phone: ''
    })
    const  history  =useHistory()   
    const {id} = useParams()

    const {name, username, email, phone} = user

    useEffect(()=>{
        loadUser()
    }, [])
    
    const onInputChange = e =>{
        setUser({...user, [e.target.name] : e.target.value })
    }
    const onSubmit = async(e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:3002/users/${id}`,user)
        history.push('/home')
    }

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit {name}</h2>
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
                <button className="btn btn-warning btn-block ">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser