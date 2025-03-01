import React, { useContext, useState } from 'react';
import { Layout, Menu, Avatar, Badge, Dropdown, Space } from 'antd';
import { NotificationOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const { Header } = Layout;

const Navbar: React.FC = () => {
    
    const isSignedIn = localStorage.getItem('user')
   const { logout } = useContext(AuthContext)!;

   

  

    const menu = (
        <Menu>
            <Link to='/dashboard'>
                <Menu.Item key="dashboard">
                    <Space>

                        Dashboard
                    </Space>
                </Menu.Item>
            </Link>


            <Menu.Item key="logout" onClick={logout}>
                <Space>

                    Logout
                </Space>
            </Menu.Item>
        </Menu>
    );

    return (
        <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


            <div style={{
                position: 'absolute',
                top: '2%',
                right: '10%',
            }}>
                {isSignedIn && (
                    <>

                        <Link to='/notifications'>
                            <Badge count={5}>
                                <NotificationOutlined style={{ fontSize: '20px', marginRight: '10px' }} />
                            </Badge>
                        </Link>

                        <Dropdown overlay={menu}>
                            <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer', marginLeft: '20px' }} />
                        </Dropdown>


                    </>
                )}
            </div>
        </Header>
    );
};

export default Navbar;
