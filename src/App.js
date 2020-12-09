import React from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  
 render(){
  return (
    <div className="todo-container">
      <h1>Indecision</h1>
      Put your life in the hands of a computer
    <div className="demo-container">
      <h2>what should i do?</h2>
      <pre> <h3>Your Option                       <button className="remove-button" onClick={this.onButtonHandler}>Remove All</button></h3>
   </pre>
    <div className="App">
     
    <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          Enter a valid value to add item
         <br></br>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button className="add-button"  type="submit">Add Option</button>
        </form>
        <p>{this.state.items.text}</p>
        
         
        
      </header>
      </div>
    </div>
    </div>
  );
 }
}


export default App;


