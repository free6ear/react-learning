import React from 'react';
import ReactTypes from 'prop-types';

// export default class Com1 extends React.Component {
//     constructor() {
//         super()

//         this.state = {
//             color: 'red'
//         }
//     }

//     render() {
//         return <div>
//             <h1>父组件</h1>
//             <Com2 color={this.state.color}/>
//         </div>
//     }
// }

// class Com2 extends React.Component {
//     constructor() {
//         super()

//     }

//     render() {
//         return <div>
//             <h3>子组件</h3>
//             <Com3 color={this.props.color} />
//         </div>
//     }
// }

// class Com3 extends React.Component {
//     constructor() {
//         super()

//     }

//     render() {
//         return <div>
//             <h5 style={{ color: this.props.color }}>子组件</h5>
//         </div>
//     }
// }

export default class Com1 extends React.Component {
    constructor() {
        super()

        this.state = {
            color: 'red'
        }
    }

    getChildContext() {
        return {
            color: this.state.color
        }
    }

    //2.使用属性校验，规定传递给子组件的数据类型，需要定义一个静态的（static) childContextTypes (固定格式)
    static childContextTypes = {
        color: ReactTypes.string
    }

    render() {
        return <div>
            <h1>父组件</h1>
            <Com2 />
        </div>
    }
}

class Com2 extends React.Component {
    render() {
        return <div>
            <h3>子组件</h3>
            <Com3/>
        </div>
    }
}

class Com3 extends React.Component {

    //3.先进行属性校验，去校验传回的属性
    static contextTypes = {
        color: ReactTypes.string
    }
    render() {
        return <div>
            <h5 style={{ color: this.context.color }}>子组件---{this.context.color}</h5>
        </div>
    }
}
