import React, { Component } from 'react'

import { HashRouter, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import styles from './css/app.module.scss';
import HomeContainer from './components/home/HomeContainer';
import MovieContainer from './components/movie/MovieContainer';
import AboutContainer from './components/about/AboutComtainer';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        console.log(window.location.hash.split('/'))
    }
    

    render() {
        return (
            <HashRouter>
                <Layout className="layout" style={{ height: "100vh" }}>
                    <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                        <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
                        <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ background: '#fff', padding: 10, flex: 1 }}>
                        <Route path="/home" component={HomeContainer}></Route>
                        <Route path="/movie" component={MovieContainer}></Route>
                        <Route path="/about" component={AboutContainer}></Route>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Altair ©2019 Created by MENG SUN</Footer> */}
                </Layout>
            </HashRouter>
        )
    }
}
