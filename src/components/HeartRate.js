import React from 'react';
import Icon from './core/Icon'


// const divStyle = {
//     fontSize: 100,
//     color: 'red',
// }

class HeartRate extends React.Component{
    render() {
        return(
            <div className="box col-md-2 col-6">
                <Icon name={"favorite"} color="red"/>
                <p>{this.props.heart}</p>
            </div>
        )
    }
}

export default HeartRate;