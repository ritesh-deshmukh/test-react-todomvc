import React from 'react'
import './todotextedit.css'
import 'rc-checkbox/assets/index.css';


function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}

export default class TodoTextEdit extends React.Component {
	constructor(props) {
	    super(props);
	    this.handleMouseHover = this.handleMouseHover.bind(this);
	    this.state = {
	      isHovering: false,
	      disabled: false,
	    };
	}

	handleMouseHover() {
	    this.setState(this.toggleHoverState);
	}

  	toggleHoverState(state) {
	    return {
	      isHovering: !state.isHovering,
	    };
	 }

	removeTodo(id){
		this.props.removeTodo(id)
	}

	render(){
		return(
			<div className='self-center bb bw1 b--black-50'>
				<div
				className="courier  f3 overflow-y-scroll-m"
				onMouseEnter={this.handleMouseHover}
          		onMouseLeave={this.handleMouseHover}>
				{this.props.todo.text} &nbsp;
				{
						this.state.isHovering && 						
							<button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>
								Remove
							</button>						
					}
				<div className="tc">
					<input
	                unchecked="true"
	                type="checkbox"
	                onChange={onChange}
	                disabled={this.state.disabled}
	              />
				</div>	
				
					
				</div>
			</div>
			)
	}
}

