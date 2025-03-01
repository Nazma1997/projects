import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types/User';
import { Form, Input, Button, message, Card } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
const api_end_point = import.meta.env.VITE_BACKEND_URL;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authContext = React.useContext(AuthContext);

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    const response = await axios.post<{ user: User; token: string }>(`${api_end_point}/auth/user/login`, {
      email: values.email,
      password: values.password,
      
    },
    {
      withCredentials: true,
    });

    
   
    if (authContext) {
      authContext.login(response);
 
      message.success('Login successful!');
      navigate('/dashboard'); 
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '24px' }}>
      <Card>
      <h1  style={{ textAlign: 'center', marginBottom: '24px',  }}>
          Login
        </h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
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
              Login
            </Button>
          </Form.Item>
        </Form>
        <p> Create an account? <Link to="/">Go to register</Link></p>
      </Card>
    </div>
  );
};

export default Login;