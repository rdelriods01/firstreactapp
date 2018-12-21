import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <div className="navbar" >
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <Icon> menu </Icon>
          </IconButton>
          <Link className="element" to='/' >MarioPlan</Link>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    auth: state.firebaseR.auth,
    profile: state.firebaseR.profile
  }
}

export default connect(mapStateToProps)(Navbar)