import React from 'react'
import './todotextinput.css'


export default class Todotextinput extends React.Component {
	constructor(props) {
		super(props)

		this.state = {value: ""}

		this.handleChange = this.handleChange.bind(this)
		this.addTodo = this.addTodo.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	handleChange(e){
		this.setState({value: e.target.value})
	}

	handleKeyDown(evt) {
        if (evt.keyCode === 13 && this.state.value.length > 0) {
            // return this.addTodo();
            this.props.addTodo(this.state.value)
			this.setState({value: ''})
            // console.log("pressed enter")
        }
    }

	addTodo(todo){
		if(todo.length > 0){
			this.props.addTodo(todo)
			this.setState({value: ''})
		}
		
	}

	render(){
		return(
				<div>
					<input autoFocus id="ipt" type="text" value={this.state.value} className="tc bg-light-blue measure-wide"
							onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Add todo item" /> &nbsp;
					<button id="btn" className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue grow"
							onClick={() => this.addTodo(this.state.value)}>
							Add
					</button>
				</div>
			)
	}
}

