import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {todos: null}
}

showAll(my){
  this.setState({todos: my})
console.log(my)

}

right(){
  console.log('inside right', this.state.todos);
    if(this.state.todos !== null){
       return this.state.todos.map((T, index) => {
          return( <h2> {T} </h2> )
        })
    }
}

  render() {
    let my;
    console.log(this.state.todos)



    return (
      <div className="App">
                <Form myTodos={this.showAll.bind(this)} />

                <div>
                      {this.right()}
                </div>
      </div>
    );
  }
}

export default App;
