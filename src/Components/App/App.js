import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewBody from '../NewBody/NewBody';
import StarList from '../StarList/StarList'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {star: {name: 'Sean', achievement: 'being so cute'}, starList: [{name: 'Sean', achievement: 'being so cute'}]}
}

handleChangeFor = (propName) => (event) =>{
  this.setState({star:{...this.state.star, [propName]: event.target.value}})
}

addStar = (event) =>{
  event.preventDefault();
  console.log('The star is:', this.state.star);
  this.setState({starList:[...this.state.starList, this.state.star ]})
  this.setState({star: {name: '', achievement: ''}})
  console.log('the starlist is:',this.state.starList);
}
  render() {
    return (
      <div className="App">
        <Header />
        <NewBody newStar={this.state.star}
        handleChangeFor={this.handleChangeFor}
        addStar={this.addStar}/>
        <StarList starList={this.state.starList} />
      </div>
    );
  }
}

export default App;
