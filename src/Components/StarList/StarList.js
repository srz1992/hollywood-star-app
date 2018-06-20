import React, { Component } from 'react';
import Star from '../Star/Star';

class StarList extends Component {
  render() {
    return (
      
      <ul>
      {this.props.starList.map( item => <Star star={item} />)}
      </ul> 
    );
  }
}

export default StarList;
