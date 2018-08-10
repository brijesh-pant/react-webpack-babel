import React, { Component } from 'react';

export default class TodoInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}

	onInputChange(e) {
		this.setState({
			input: e.target.value
		});
	}

	onSubmit = event => {
		const { handleAddTodo } = this.props;
		handleAddTodo(this.state.input, event);
		this.setState({
			input: ''
		});
	};

	render() {
		return (
			<div className="todoInput">
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.input}
						placeholder="add something here..."
						onChange={this.onInputChange.bind(this)}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}
