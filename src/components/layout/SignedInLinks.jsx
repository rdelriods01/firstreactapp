import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import { Fab, Button } from '@material-ui/core'

const SignedInLinks = (props) => {
    return (
        <div className="signedinlinks" >
            <ul>
                <li><NavLink to="/create" ><Button color="inherit" >New Project</Button></NavLink></li>
                <li><Button color="inherit" onClick={props.signOut} >Log Out</Button></li>
                <li><NavLink to="/" > <Fab color="secondary"> {props.profile.initials} </Fab> </NavLink>  </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);