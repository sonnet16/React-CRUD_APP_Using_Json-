import React , {useState , useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function ViewUser() {
    const {id} = useParams()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: '',
        phone: ''
    })
    const {name, username, email, phone} = user
    useEffect(()=>{
        loadUser()
    },[])

    const deleteUser = async(id) =>{
        await axios.delete(`http://localhost:3002/users/${id}`)
        alert( 'Are You Sure To Delete ')
        loadUser()
    }

    const loadUser = async() =>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }

    return (
        <div className='conatiner my-3'>
            <h1 className='text-center'> User Details</h1>
            <div className='container border shadow dark ml-5'>
                <h4 className=' py-2'>Name : {name}</h4>
                <h4 className=' py-2'>UserName: {username}</h4>
                <h4 className=' py-2'>Email : {email}</h4>
                <h4 className=' py-2'>Phone : {phone}</h4>
                <Link className ="btn btn-success ml-2" to ='/home'>
                 Go Back Home
                  </Link>
                <Link className="btn btn-warning ml-2"
                    to={`/edit/${user.id}`}>
                       Do you Want To Edit
                  </Link>
                <Link className ="btn btn-danger ml-2" onClick ={()=>{deleteUser(user.id)}}>
                  Do you Want To Delete
                  </Link>
                                
            </div>
        </div>
    )
}

export default ViewUser
