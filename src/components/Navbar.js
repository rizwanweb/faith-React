import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="ui ">
            <nav className="ui raised padded segment ">
                <div className="ui horiontol ">
                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">Management
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <NavLink to="/" className="ui item" style={{width:'120px'}}>Home</NavLink>
                                <NavLink to="/clients" className="item" style={{width:'120px'}}>Clients</NavLink>
                                <NavLink to="/contact" className="item" style={{width:'120px'}}>Contact Us</NavLink>
                                <div className="item">Choice 2</div>
                                <div className="item">Choice 3</div>
                            </div>
                        </div>
                    </div>

                    <div className="ui compact menu">
                        <div className="ui simple dropdown item">Job Management
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <NavLink to="/" className="ui item" style={{width:'120px'}}>Job List</NavLink>
                                <NavLink to="/clients" className="item" style={{width:'120px'}}>Clients</NavLink>
                                <NavLink to="/contact" className="item" style={{width:'120px'}}>Contact Us</NavLink>
                                

                            </div>
                        </div>
                    </div>

                    <div className="ui compact menu">
                        <div className="ui simple dropdown item" style={{width:"140px"}}>Billing
                            
                            <div className="menu">
                                <NavLink to="/" className="ui item" style={{width:'120px'}}>Home</NavLink>
                                <NavLink to="/clients" className="item" style={{width:'120px'}}>Clients</NavLink>
                                <NavLink to="/contact" className="item" style={{width:'120px'}}>Contact Us</NavLink>
                                <NavLink to="/clientHome" className="item" style={{width:'120px'}}>Client Home</NavLink>
                                <div className="item">Choice 2</div>
                                <div className="item">Choice 3</div>
                            </div>
                        </div>
                    </div>        

                </div>
            </nav>
        </div>
    )
}

export default Navbar
