import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    todos: null}

}

add(e){
  let myH = e.target.parentElement.children[0];
  console.log(myH)
   myH.setAttribute("class", "done")
}

showAll(my){
  this.setState({todos: my})
console.log(my)

}

right(){
  console.log('inside right', this.state.todos);
    if(this.state.todos !== null){
       return this.state.todos.map((T, index) => {
          return(
            <div className="list" key={index}>
                <h2>task:  {T} </h2>
                <span> Done? </span>
                <input type="checkbox" value="true" onChange={this.add.bind(this)}/>
            </div>
            )
        })
    }
}

  render() {
    let my;
    console.log(this.state.todos)



    return (
      <div className="App">
                  <button className="butt"> delete selected </button>
        <main>
               <h1> Todo List </h1>
                <h3> create a Todo </h3>
                <Form myTodos={this.showAll.bind(this)} />
                <div>
                      {this.right()}
                </div>
          </main>
      </div>

    );
  }
}

export default App;
