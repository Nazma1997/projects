import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types/User';
import { Form, Input, Button, Typography, message, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authContext = React.useContext(AuthContext);

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const response = await axios.post<{ user: User; token: string }>('/api/auth/register', {
        username: values.username,
        password: values.password,
        role: 'Customer', // Default role for new users
      });

      if (authContext) {
        authContext.login(response.data.user);
        localStorage.setItem('token', response.data.token); // Store token for future requests
        message.success('Registration successful!');
        navigate('/dashboard'); // Redirect to dashboard after registration
      }
    } catch (err) {
      message.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '24px' }}>
      <Card>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
          Register
        </Title>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
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