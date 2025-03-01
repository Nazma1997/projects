import React, { useState } from 'react';
import { Card, Input, Button, Space } from 'antd';
import { SendOutlined } from '@ant-design/icons';


const { TextArea } = Input;

interface ReplySectionProps {
  ticketId: number;
}

const ReplySection: React.FC<ReplySectionProps> = ({ ticketId }) => {
  const [reply, setReply] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Reply submitted for Ticket ID: ${ticketId} - ${reply}`);
    setReply('');
  };

  return (
    <div style={{ marginTop: 16 }} >
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <>
          <TextArea
            placeholder="Add a reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
        
         
            required
           
          />
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<SendOutlined />}
            style={{ marginLeft: 5 }} 
          />
        </>
      </form>
    </div>
  );
};

export default ReplySection;
