import React, { PureComponent } from 'react'
import styles from '../../css/movie_item.module.scss';
import { Rate } from 'antd';

export default class MovieItem extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return ( 
            <div className={styles.box}>
                <img src={this.props.images.small.replace('img3.doubanio.com', 'img2.doubanio.com')} alt="" className={styles.img}/>
                <h4>电影名称：{this.props.title}</h4>
                <h4>上映年份：{this.props.year}</h4>
                <h4>电影类型：{this.props.genres.join('，')}</h4>
                <Rate disabled defaultValue={this.props.rating.average / 2} />
            </div> 
        )
    }
}
 