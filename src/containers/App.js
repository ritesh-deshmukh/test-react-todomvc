import React, { Component } from 'react';
import './App.css';
import Header from '../components/header'
import TodoTextInput from '../components/todotextinput'
import TodoTextEdit from '../components/todotextedit'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      todos: [],
      nextId: 0
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(todoText){
    let todos = this.state.todos.slice()
    if(todoText === ""){
      console.log("No input")
    } else if(/\S/.test(todoText)) {
        todos.push({id: this.state.nextId, text: todoText.trim()})
        this.setState({
        todos: todos,
        nextId: ++this.state.nextId
        })
        // console.log(this.state.nextId)
    } else {
            console.log("White spaces only")
    }    
  }

  removeTodo(id){
    // console.log("Removing", id)
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
    --this.state.nextId
  }

  render() {
    return (
      <div className="tc bg-blue">
        <div className="">
          <Header />
          <TodoTextInput todoText="" addTodo={this.addTodo}/>
          <ul className=" content-center fl w-90">
            {
              this.state.todos.map((todo) => {
                  return <TodoTextEdit todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
              })
            }
            <br></br>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
