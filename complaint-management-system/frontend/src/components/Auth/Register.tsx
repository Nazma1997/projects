import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types/User';
import { Form, Input, Button, message, Card } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
const api_end_point = import.meta.env.VITE_BACKEND_URL;



const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authContext = React.useContext(AuthContext);

  console.log('api_end_point', api_end_point)

  const onFinish = async (values: { name: string; email: string, password: string }) => {
    setLoading(true);
    const response = await axios.post<{ user: User; token: string }>(`${api_end_point}/auth/user/register`, {
      name: values.name,
      email: values.email,
      password: values.password,

    });

    if (authContext) {
      authContext.login(response.data.user);
      message.success('Registration successful!');
      navigate('/login');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '24px' }}>
      <Card>
        <h1 style={{ textAlign: 'center', marginBottom: '24px', }}>
          Register
        </h1>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="name"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ width: '100%' }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <p> Already have an account? <Link to="/login">Go to Login</Link></p>
      </Card>
    </div>
  );
};

export default Register;