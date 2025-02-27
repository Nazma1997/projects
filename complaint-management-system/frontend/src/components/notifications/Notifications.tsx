import { Card } from 'antd';
import React from 'react';

export const Notifications = () => {
    const notifications = [
        {
          id: 1,
          subject: 'Ticket 1',
        
        },
        {
          id: 2,
          subject: 'Ticket 2',
         
        },
      ];

    return (
      <>
        <h1>Notifications</h1>
        {
            notifications.length && notifications.map(notification => (
                <Card key={notification.id} role='notification' style={{ marginBottom: 16 }}>
                    <h2>{notification.subject}</h2>
                </Card>
            ))  
        }
      </>
    )
}