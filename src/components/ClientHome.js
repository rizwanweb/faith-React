import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ClientHome = () => {
    
    const  clientID  = useParams();   
    let [client, setClient] = useState([]);

    

    useEffect(() =>{
        const fetchClient = async () =>{
        let response = await fetch(`/api/client/${clientID.pk}`)
        let client = await response.json()
        setClient(client)
    }
        fetchClient();
    }, [clientID])

    return (
        <div className='ui'>
            <br />
            <h1 className='ui center aligned header'>Client Home</h1>
            <br />
            <div className="ui grid container">
                <div className="three column row">
                    <div className="column">
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header center aligned">Client Information</div>
                                <div className="description">
                                    <tr><td>Company Name:</td><td>{client.name}</td></tr>
                                    <tr><td>NTN:</td><td>111-222-333</td></tr>
                                    <tr><td>GST:</td><td>333-222-111</td></tr>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header center aligned">Contact Details</div>
                                <div className="description">
                                    <tr><td>Contact Person:</td><td><strong>{client.person}</strong> </td></tr>
                                    <tr><td>Mobile #:</td><td>{client.mobile}</td></tr>
                                    <tr><td>Email:</td><td>{client.email}</td></tr>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header center aligned">Consignments</div>
                                <div className="description">
                                <tr><td className='three wide'>Total Jobs:</td><td>5</td></tr>
                                <tr><td>Total Container</td><td></td></tr>
                                <tr><td>Balance</td><td></td></tr>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    )
}

export default ClientHome;
