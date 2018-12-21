import React from 'react'

import { Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
    console.log(notifications);

    return (
        <div className="notifications">
            <Card className="card">
                <CardHeader title="Notifications" avatar={<Avatar className="avatar" >{notifications && notifications.length}</Avatar>} className="cardheader" />
                <CardContent>
                    <ul>
                        {notifications && notifications.map(item => {
                            return (
                                <li key={item.id} >
                                    <span className="user" > {item.user} </span>
                                    <span> {item.content} </span>
                                    <div className="greytext"> {moment(item.time.toDate()).fromNow()} </div>
                                </li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default Notifications
