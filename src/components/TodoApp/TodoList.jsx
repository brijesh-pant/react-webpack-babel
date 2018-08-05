import React, { Component } from 'react';

import { COMPLETED_TODO } from './util.js';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.todoInput = null;
		this.state = {
			edit: false,
			input: ''
		};
		this.setTextInputRef = element => {
			this.todoInput = element;
		};
	}

	componentDidUpdate() {
		if (this.todoInput) this.todoInput.focus();
	}

	moveCaretAtEnd(e) {
		var temp_value = e.target.value;
		e.target.value = '';
		e.target.value = temp_value;
	}

	toggleEdit = prevTodoText => {
		this.setState(prevState => ({
			edit: !prevState.edit,
			input: prevTodoText
		}));
		if (this.todoInput) this.todoInput.focus();
	};

	deleteTodo = id => {
		const { handleDeleteTodo } = this.props;
		handleDeleteTodo(id);
	};

	onInputChange(e) {
		this.setState({
			input: e.target.value
		});
	}

	onEditTodo = (id, newTodoText, status, event) => {
		event.preventDefault();
		const { handleEditTodo } = this.props;
		handleEditTodo(id, newTodoText, status);
		this.setState(prevState => ({
			edit: !prevState.edit,
			input: ''
		}));
	};

	render() {
		const { id, text, status, toggleTodoFilter } = this.props;

		return (
			<li>
				{this.state.edit ? (
					<div className="editTodo">
						<form onSubmit={this.onEditTodo.bind(this, id, this.state.input, status)}>
							<input
								ref={this.setTextInputRef}
								onFocus={this.moveCaretAtEnd}
								type="text"
								value={this.state.input}
								onChange={this.onInputChange.bind(this)}
							/>
							<div className="actionBtns">
								<button type="submit">Ok</button>
								<button>Cancel</button>
							</div>
						</form>
					</div>
				) : (
					<div className="editDelete">
						<label className="container">
							{text}
							<input type="checkbox" checked={status === COMPLETED_TODO} onChange={toggleTodoFilter(id)} />
							<span className="checkmark" />
						</label>
						<div className="actionBtns">
							<button onClick={this.toggleEdit.bind(this, text)}>Edit</button>
							<button onClick={this.deleteTodo.bind(this, id)}>Delete</button>
						</div>
					</div>
				)}
			</li>
		);
	}
}

export default class TodoList extends Component {
	render() {
		const { todos } = this.props;

		return (
			<ul className="todoList">
				{todos.map(({ id, text, status }, index) => (
					<TodoItem key={index} id={id} text={text} status={status} {...this.props} />
				))}
			</ul>
		);
	}
}
