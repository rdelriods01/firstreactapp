import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';


import { Card, CardContent, CardActions } from '@material-ui/core';

const ProjectDetails = (props) => {
    console.log(props);
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
            <div className="projectdetails" >
                <Card className="card">
                    <CardContent>
                        <h2>{project.title}</h2>
                        <p>{project.content}</p>
                    </CardContent>
                    <CardActions className="cardactions">
                        <p>Posted by {project.firstName}  {project.lastName} </p>
                        <p>{moment(project.createdAt.toDate()).calendar()}</p>
                    </CardActions>
                </Card>
            </div>
        )
    } else {
        return (
            <p>Loading Project...</p>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);

    const id = ownProps.match.params.id;
    const projects = state.firestoreR.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebaseR.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails) 
