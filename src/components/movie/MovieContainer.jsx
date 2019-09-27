import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link, Route } from 'react-router-dom';

import MovieList from './MovieList';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class MovieContainer extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1"><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/movie/top250/1">TOP250</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ paddingLeft: "1px" }}>       
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Route path="/movie/:type/:page" component={MovieList}></Route>
        </Content>
      </Layout>
    </Layout>
        )
    }
}
