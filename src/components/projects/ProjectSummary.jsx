import React from 'react'
import moment from 'moment';

import { Card, CardContent } from '@material-ui/core';

const ProjectSummary = ({ project }) => {
    return (
        <div className="projectsummary">
            <Card className="card">
                <CardContent>
                    <h2>{project.title}</h2>
                    <p>Posted by {project.firstName} {project.lastName} </p>
                    <span>{moment(project.createdAt.toDate()).calendar()} </span>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectSummary
