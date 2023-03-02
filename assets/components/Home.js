import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';

    
class Home extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          humor: 'happy'
        }
      }

    render() {
        return (

           <div>
                <h1>Co za szajs, {this.props.name}</h1>
           </div>
        )
    }



}

export default Home;