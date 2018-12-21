import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

import { Card, FormControl, InputLabel, Input, Button, CardHeader } from '@material-ui/core';

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }

    render() {
        const {  authError, auth } =this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="signin">
                <Card className="card">
                    <CardHeader title="Sign In" className="cardheader" />
                    <form onSubmit={this.handleSubmit} >
                        <FormControl className="emailinput" margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange} />
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" color="primary" >Sign in</Button>
                        <div>
                            {authError ? <p>{authError} </p>: null}
                        </div>
                    </form>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.authR.authError, 
        auth:state.firebaseR.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
