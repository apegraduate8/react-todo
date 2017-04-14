import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

clear(){
  this.setState({input: ""})
}

changeText(e){
      this.setState({input: e.target.value})
}

sort(arr){
    let riri = arr.map((to, index) => {
            return to.my_todo
    })

    console.log("inside of the sort", riri)
    this.props.myTodos(riri);
}

send(e){
  // console.log(e.target.children[0].children[0].value)
  e.preventDefault();
  console.log(this.state.input)
      axios({
            method: "POST",
            url: "http://localhost:9000/api",
            data: {todoo: this.state.input}
      })
      .then(res => {console.log(res.data.all[0]); this.sort(res.data.all) })
      .catch(err => console.log(err))

      this.clear()

}



  render() {
    return (
      <div className="form">
        <form onSubmit={this.send.bind(this)}>
            <label>
              Todo
              <input
               type="text"
               value={this.state.input}
               onChange={this.changeText.bind(this)}

               />
            </label>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Form;
