import React from 'react';
import { Button } from 'antd';

export default class Details extends React.PureComponent {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <Button type='primary' onClick={() => this.props.history.push({
                    pathname: '/'
                })}>回家</Button>
            </div>
        )
    }
}