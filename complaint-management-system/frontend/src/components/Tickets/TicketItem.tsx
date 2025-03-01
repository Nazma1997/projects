import React, { useContext, useState } from 'react';
import { Ticket } from '../../types/Ticket';
import { Card, Button, Space, Row, Col, Tag, Select } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ReplySection from './ReplySection';
import { ModalItem } from '../modal/modal';
import { TicketContext } from '../../context/TicketContext';



interface TicketItemProps {
  ticket: Ticket;
  onDelete: (id: number) => void;
  onUpdate?: (updatedData: Partial<Ticket>) => void;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket, onDelete, onUpdate }) => {
  const { user_data, isModalOpen, setIsModalOpen, id, setId ,updateStatus} = useContext(TicketContext)!;
  const isAdmin = user_data?.user_type === 'ADMIN'
 

  return (
    <Card>
      <Card style={{ marginBottom: 16 }}>



        <Row justify="space-between" >
          <h1  >{ticket.subject}</h1>



          <Col>
            <Space>
              <Tag color='blue'>Status: { ticket?.status}</Tag>
              {
                isAdmin ? <>
                <Button onClick={() => updateStatus('Resolved', ticket.id)}>Resolved</Button>
                <Button onClick={() => updateStatus('Closed', ticket.id)}>Closed</Button>
                </>  : (
                  <>
                    <Button
                      type="text"
                      icon={<EditOutlined />}
                      onClick={() => {
                        setId(ticket.id)
                        setIsModalOpen(true)
                      }}

                    />
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => onDelete(ticket.id)}
                    />
                  </>
                )
              }

            </Space>
          </Col>
        </Row>

        {/* Ticket Description */}
        <p>{ticket.description}</p>

        <ModalItem isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onSubmit={onUpdate} id={id} />
        {/* Reply Section */}

      </Card>
      <ReplySection ticketId={ticket.id} />


    </Card>

  );
};

export default TicketItem;
