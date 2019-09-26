import React from 'react';
//HashRouter表示一个路由的根容器，将来所有的与路由相关的东西都要包裹在HashRouter内，且一个网站中只需要一个HashRouter
//Route表示一个路由规则，在Route上，有两个比较重要的属性：path component
//Link表示一个路由的链接
import { HashRouter, Route, Link } from 'react-router-dom';
import { Divider } from 'antd';
import Movie from './components/Movie';
import Book from './components/Book';
import Music from './components/Music';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // 启用路由
        return <HashRouter>
            <div>
                <Link to="/movie">电影</Link><Divider type="vertical" />
                <Link to="music">音乐</Link><Divider type="vertical" />
                <Link to="book">图书</Link>

                <Divider />

                <Route path="/movie" component={Movie} />
                <Route path="/music" component={Music} />
                <Route path="/book" component={Book} />
            </div>
        </HashRouter>
    }
}