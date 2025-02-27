import React, { useState } from 'react';
import { Ticket } from '../../types/Ticket';
import { Form, Input, Button } from 'antd';

interface TicketFormProps {
  onSubmit: (ticketData: Omit<Ticket, 'id' | 'created_at' | 'updated_at'>) => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { subject: string; description: string }) => {
    onSubmit({ ...values, status: 'Open' });
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item 
        label="Subject" 
        name="subject" 
        rules={[{ required: true, message: 'Please enter a subject' }]}
      >
        <Input placeholder="Enter subject" />
      </Form.Item>

      <Form.Item 
        label="Description" 
        name="description" 
        rules={[{ required: true, message: 'Please enter a description' }]}
      >
        <Input.TextArea placeholder="Enter description" rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TicketForm;
