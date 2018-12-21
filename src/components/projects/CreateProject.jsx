import { Button, Card, CardHeader, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from 'react-router-dom';



export class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="createproject">
                <Card className="card">
                    <CardHeader title="Create New Project" className="cardheader" />
                    <form onSubmit={this.handleSubmit} >
                        <FormControl className="titleinput" margin="normal" required fullWidth>
                            <InputLabel htmlFor="title">Title</InputLabel>
                            <Input id="title" name="title" autoComplete="title" autoFocus onChange={this.handleChange} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="content">Project Content</InputLabel>
                            <Input name="content" type="content" id="content" autoComplete="current-content" onChange={this.handleChange} />
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" color="primary" >Create</Button>
                    </form>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebaseR.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
