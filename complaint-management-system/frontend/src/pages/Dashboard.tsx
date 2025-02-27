import React, { useContext, useState } from 'react';
import { TicketContext } from '../context/TicketContext';
import TicketList from '../components/Tickets/TicketList';
import { Button, Card, Row, Col, Select, Typography } from 'antd';
import { ModalItem } from '../components/modal/modal';

const { Title } = Typography;

const Dashboard: React.FC = () => {
  const { createTicket, deleteTicket } = useContext(TicketContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tickets = [
    {
      id: 1,
      subject: 'Ticket 1',
      description: 'This is a ticket description',
      status: 'Open',
    },
    {
      id: 2,
      subject: 'Ticket 2',
      description: 'This is a ticket description',
      status: 'Open',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
  
      <Row justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
        <Col>
          <Title level={2} style={{ margin: 0 }}>
            Dashboard
          </Title>
        </Col>
        <Col>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create Ticket
          </Button>
        </Col>
      </Row>


      <Card style={{ marginBottom: '24px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              Total Tickets: 50
            </Title>
          </Col>
          <Col>
            <Select defaultValue="All" style={{ width: 120 }}>
              <Select.Option value="All">All</Select.Option>
              <Select.Option value="Open">Open</Select.Option>
              <Select.Option value="Closed">Closed</Select.Option>
            </Select>
          </Col>
        </Row>
      </Card>

  
      <Card>
        <TicketList tickets={tickets} onDelete={deleteTicket} />
      </Card>


      <ModalItem
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={createTicket}
        title="Create Ticket"
      />
    </div>
  );
};

export default Dashboard;