import React, { useContext, useState } from 'react';
import { Ticket } from '../../types/Ticket';
import { Card, Button, Space, Typography, Row, Col } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ReplySection from './ReplySection';
import { ModalItem } from '../modal/modal';

import { TicketContext } from '../../context/TicketContext';


interface TicketItemProps {
  ticket: Ticket;
  onDelete: (id: number) => void;
  onUpdate?: (id: number, updatedData: Partial<Ticket>) => void;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket, onDelete, onUpdate }) => {
  const { createTicket, deleteTicket } = useContext(TicketContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Card style={{ marginBottom: 16 }}>
      {/* Row for Subject and Buttons */}
      <Row justify="space-between" >
        <h1  >{ticket.subject}</h1>
        <Col>
          <Space>
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => setIsModalOpen(true)}

            />
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDelete(ticket.id)}
            />
          </Space>
        </Col>
      </Row>

      {/* Ticket Description */}
      <p>{ticket.description}</p>

      <ModalItem isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onSubmit={onUpdate} title={'Update ticket'} />
      {/* Reply Section */}
      <ReplySection ticketId={ticket.id} />
    </Card>
  );
};

export default TicketItem;
