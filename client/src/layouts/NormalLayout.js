import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './AdminLayout.scss';

const { Header, Sider, Content } = Layout;

function LoadRoutes ({ routes }) {
  return (
    <Switch>
      { routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      }) }
    </Switch>
  )
}

export default class NormalLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { routes } = this.props

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <LoadRoutes routes={routes} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}