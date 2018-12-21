import React from 'react'

import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const Projectlist = ({ projects }) => {
    return (
        <div className="projectlist" >
            {/* Se hace la siguiente condicion en la funcion porque puede haber ocasiones en las
        que no se tengan projectos desde un inicio, es decir projects.lenght = 0, así
        preguntamos, si hay projectos entonces has MAP */}
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id} >
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Projectlist
