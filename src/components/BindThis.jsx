import React from 'react';

export default class BindThis extends React.Component {
    constructor() {
        super() 
        this.state = {
            msg: "hello!"
        }
    }

    render() {
        return <div>
            <input type="text" value={this.state.msg} style={{width: "100%"}} onChange={this.txtChanged} ref="txt" />
        </div>
    }

    txtChanged = (e) => {
        this.setState({
            msg: e.target.value
        })
    }
}