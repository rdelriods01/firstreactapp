import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { projects, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard">
                <div className="mainGrid">
                    <div className="projectListGrid" >
                        <ProjectList projects={projects} />
                    </div>
                    <div className="notificationsGrid">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestoreR.ordered.projects,
        auth: state.firebaseR.auth,
        notifications: state.firestoreR.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);