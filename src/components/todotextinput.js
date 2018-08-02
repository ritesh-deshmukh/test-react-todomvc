import React from 'react'
import './todotextinput.css'

export default class Todotextinput extends React.Component {
	constructor(props){
		super(props)

	}

	render(){
		return(
				<div>
					<input id="ipt" type="text" value="" className="" placeholder="Add todo"/>
					<button id="btn" className="" onClick="">
						Insert
					</button>

				</div>

			)
	}
}