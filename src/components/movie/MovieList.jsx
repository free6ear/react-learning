import React, { PureComponent } from 'react'
import { Spin, Alert } from 'antd';
import fetchJSONP from 'fetch-jsonp';
import MovieItem from './MovieItem';

export default class MovieList extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1, //当前展示页码值
            pageSize: 14, //每页显示数据数量
            total: 0, //当前电影分类下总共有多少条数据
            isLoading: true, //数据是否正在加载，如果为true,表示正在加载数据
            movieType: props.match.params.type, //保存一下要获取的电影的类型
        }
    }
    
    componentWillMount() {
        this.loadMovieListByTypeAndPage()
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: true,
            nowPage: parseInt(nextProps.match.params.page) || 1, 
            movieType: nextProps.match.params.type
        }, function() {
            this.loadMovieListByTypeAndPage()
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}     
            </div>
        )
    }

    //根据电影类型和页码获取电影数据
    loadMovieListByTypeAndPage = () => {
        const start = this.state.pageSize * (this.state.nowPage - 1)
        const url = `http://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}&city=上海&apikey=0df993c66c0c636e29ecbb5344252a4a`
        // const data = require('../test_data/in_theaters.json')
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false,
        //         movies: data.subjects,
        //         total: data.total,
        //     })
        // }, 1000)

        fetchJSONP(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoading: false,
                movies: data.subjects,
                total: data.total,
            })
        })
    }

    renderList = () => {
        if (this.state.isLoading) {
            return <Spin tip="Loading...">
                <Alert
                message="正在加载电影列表"
                description="精彩内容，马上呈现..."
                type="info"
                />
            </Spin>
        } else {
            return <div  style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.movies.map(item => {
                    return <MovieItem {...item} key={item.key} />
                })}
            </div>
        }
    }
}

//React中， 可以使用fetch API获取数据，fetch API基于Promise封装的
