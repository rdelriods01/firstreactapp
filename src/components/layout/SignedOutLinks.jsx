import React from 'react'
import { NavLink } from 'react-router-dom';

import { Button } from '@material-ui/core';

const SignedOutLinks = () => {
    return (
        <div className="signedoutlinks" >
            <ul >
                <li><NavLink to="/signup" ><Button color="inherit" >Sign Up</Button></NavLink></li>
                <li><NavLink to="/signin" ><Button color="inherit" >Log In</Button></NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;