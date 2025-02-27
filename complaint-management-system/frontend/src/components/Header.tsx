import React, { useState } from 'react';
import { Layout, Menu, Avatar, Badge, Dropdown, Space } from 'antd';
import { NotificationOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar: React.FC = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);


    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    const handleMenuClick = (e: any) => {
        if (e.key === 'logout') {
            handleSignOut();
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Link to='/dashboard'>
                <Menu.Item key="dashboard">
                    <Space>

                        Dashboard
                    </Space>
                </Menu.Item>
            </Link>


            <Menu.Item key="logout">
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
