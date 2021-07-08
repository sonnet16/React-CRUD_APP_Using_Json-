import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Table} from 'react-bootstrap'


function Home() {
    const [users, setUsers] = useState([])

    useEffect( () => {
        loadUsers()
    }, [])

    const loadUsers = async() =>{
        const result = await axios.get("http://localhost:3002/users")
        setUsers(result.data.reverse())
    }

    const deleteUser = async(id) =>{
        await axios.delete(`http://localhost:3002/users/${id}`)
        alert( 'Are You Sure To Delete ')
        loadUsers()
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <h1 className='text-center my-2'>Home Page</h1>

                <Table className="table border shadow ">
                <thead variant="dark">
                    <tr>
                    <th>#</th>
                    <th >Name</th>
                    <th >User Name</th>
                    <th >Email</th>
                    <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        users.map((user, index)=>(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                <Link className="btn btn-primary mr-2" to={`/view/${user.id}`}>
                                    View
                                </Link>
                                <Link
                                    className="btn btn-warning ml-2"
                                    to={`/edit/${user.id}`}
                                >
                                    Edit
                                </Link>
                                <Link className ="btn btn-danger ml-2" onClick ={()=>{deleteUser(user.id)}}>
                                    Delete
                                </Link>
                                
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home
