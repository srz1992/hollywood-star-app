import React, { Component } from 'react';
import './Body.css'

class Body extends Component {
  
    constructor(props){
        super(props);
        this.state = {star: {name: 'Sean', achievement: 'being so handsome'}}
    }

    handleChangeFor = (propName) => (event) =>{
        console.log('propName is:', propName);
        this.setState({star:{...this.state.star, [propName]: event.target.value}})

    }

    render() {
    return (
      <div className="Header">
        Star: <input type="text" onChange={this.handleChangeFor('name')}/><span> </span>
        Achievement: <input type="text" onChange={this.handleChangeFor('achievement')}/>
        <input type="submit"/>
        <p>{this.state.star.name} is famous for {this.state.star.achievement}</p>

      </div>
     
    );
  }
}

export default Body;
