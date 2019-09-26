import React from 'react';
import ReactDOM from 'react-dom';

//HashRouter表示一个路由的根容器，将来所有的与路由相关的东西都要包裹在HashRouter内，且一个网站中只需要一个HashRouter
//Route表示一个路由规则，在Route上，有两个比较重要的属性：path component
//Link表示一个路由的链接
import { HashRouter, Route, Link } from 'react-router-dom';
import App from './App'


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  