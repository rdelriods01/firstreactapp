import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions';
import { Card, FormControl, InputLabel, Input, Button, CardHeader } from '@material-ui/core';

export class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="signup">
                <Card className="card">
                    <CardHeader title="Sign Up" className="cardheader" />
                    <form onSubmit={this.handleSubmit} >
                        <FormControl className="emailinput" margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input id="firstName" name="firstName" autoComplete="firstName" onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <Input id="lastName" name="lastName" autoComplete="lastName" onChange={this.handleChange} />
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" color="primary" >Sign up</Button>
                        {authError ? <p> {authError} </p> : null}
                    </form>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebaseR.auth,
        authError: state.authR.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
