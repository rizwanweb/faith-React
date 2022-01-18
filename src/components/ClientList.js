import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


 const ClientList = () => {
    
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchClients = async () =>{
        let response = await fetch("/api/clients")
        let data = await response.json()
        setData(data)

    }
        fetchClients();
    }, [])

    return(
        <div className='ui container'>
            <br />
            <h1 className='ui header center aligned'>Client List</h1>
            <table className="ui active table">
                <thead>
                    <tr>
                        <th>Party Name</th>
                        <th>Contact Person</th>
                        <th>Email Address</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>      
                    {data.map(client => (
                        
                        <tr key={client.id}>
                            <td data-label="Name"><Link to={`/client/${client.id}`}>{client.name}</Link></td>
                            <td data-label="Age">{client.person}</td>
                            <td data-label="Job">{client.email}</td>
                            <td>{client.mobile}</td>
                            <td>{client.address}</td>
                            <td><button className='ui button' style={{width:'100px'}}>Edit</button></td>
                            <td><button className='ui button' style={{width:'100px'}}>Delete</button></td>
                        </tr>
                    ))}    
                </tbody>
            </table>
        </div>
    )
}
export default ClientList
