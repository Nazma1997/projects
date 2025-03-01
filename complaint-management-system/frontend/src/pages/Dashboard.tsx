import React, { useContext, useState } from 'react';
import { TicketContext } from '../context/TicketContext';
import TicketList from '../components/Tickets/TicketList';
import { Button, Card, Row, Col, Select, Typography } from 'antd';
import { ModalItem } from '../components/modal/modal';

const { Title } = Typography;

const Dashboard: React.FC = () => {
  const { user_data, tickets, createTicket, deleteTicket, setFilterItem, updateTicket, isModalOpen, setIsModalOpen } = useContext(TicketContext)!;








  return (
    <div style={{ padding: '24px' }}>

      <Row justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
        <Col>
          <Title level={2} style={{ margin: 0 }}>
            {user_data?.name}  Dashboard
          </Title>
        </Col>
        <Col>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create ticket
          </Button>
        </Col>
      </Row>


      <Card style={{ marginBottom: '24px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              Total Tickets: {tickets?.length || 0}
            </Title>
          </Col>
          <Col>
            <Select defaultValue="All" style={{ width: 120 }} onChange={value => setFilterItem(value)}>
              <Select.Option value="All">All</Select.Option>
              <Select.Option value="Open">Open</Select.Option>
              <Select.Option value="Closed">Closed</Select.Option>
            </Select>
          </Col>
        </Row>
      </Card>


      <Card>
        <TicketList tickets={tickets} onDelete={deleteTicket} onUpdate={updateTicket} />
      </Card>


      <ModalItem
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onSubmit={createTicket}
        
      />
    </div>
  );
};

export default Dashboard;