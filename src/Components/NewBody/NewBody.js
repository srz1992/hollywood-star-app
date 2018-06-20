import React, { Component } from 'react';
import './Body.css'

class NewBody extends Component {

    render() {
    // this.state.starList.forEach(function(star){
    //     listItemHtml.push('<li>{star.name} is famous for {star.achievement}</li>')
    // });


    return (
      <div className="Header">
        <h2>Add a Star</h2>
        <form onSubmit={this.props.addStar}>
        <label>Star: </label> <input value={this.props.newStar.name} type="text" onChange={this.props.handleChangeFor('name')}/><span> </span>
       <label > Achievement: </label><input value={this.props.newStar.achievement} type="text" onChange={this.props.handleChangeFor('achievement')}/>
        <input value='Add' type="submit"/>
        </form>
    </div>
     
    );
  }
}

export default NewBody;
