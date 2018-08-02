import React from 'react'
import './todotextinput.css'

export default class Todotextinput extends React.Component {
	constructor(props){
		super(props)

	}

	render(){
		return(
				<div className="">
					<div className="">
						Test
						<button className="" onClick="">
							Remove
						</button>
						<div className="">
							<input type="checkbox"/>
						</div>
					</div>
				</div>

			)
	}
}