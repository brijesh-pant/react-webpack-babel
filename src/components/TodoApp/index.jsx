import React, { Component } from 'react';

import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

import { ACTIVE_TODO, ALL_TODO, COMPLETED_TODO } from './util.js';

const TodoFilter = ({ currentFilter, changeTodoFilter }) => {
	return (
		<div className="todoFilter">
			<button className={currentFilter === ALL_TODO ? 'activeBtn' : ''} onClick={changeTodoFilter.bind(this, ALL_TODO)}>
				Show All
			</button>
			<button
				className={currentFilter === COMPLETED_TODO ? 'activeBtn' : ''}
				onClick={changeTodoFilter.bind(this, COMPLETED_TODO)}
			>
				Completed
			</button>
			<button
				className={currentFilter === ACTIVE_TODO ? 'activeBtn' : ''}
				onClick={changeTodoFilter.bind(this, ACTIVE_TODO)}
			>
				Active
			</button>
		</div>
	);
};

export default class TodoApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			filter: ALL_TODO
		};
	}

	changeTodoFilter = filter => {
		this.setState({
			filter
		});
	};

	toggleTodoFilter = id => event => {
		this.setState(prevState => {
			const prevTodos = prevState.todos;
			const todos = prevTodos.map(
				todo =>
					todo.id === id
						? todo.status === COMPLETED_TODO
							? Object.assign({}, todo, { status: ACTIVE_TODO })
							: Object.assign({}, todo, { status: COMPLETED_TODO })
						: todo
			);
			return { todos };
		});
	};

	handleAddTodo = (text, event) => {
		event.preventDefault();
		const todo = { text, status: ACTIVE_TODO };
		this.setState(prevState => {
			const prevTodos = prevState.todos;
			todo.id = prevTodos.length + 1;
			return {
				todos: prevState.todos.concat(todo)
			};
		});
	};

	handleEditTodo = (id, text, status) => {
		const updatedTodo = { id, text, status };
		this.setState(prevState => {
			const prevTodos = prevState.todos;
			return {
				todos: prevTodos.map(todo => (todo.id === id ? updatedTodo : todo))
			};
		});
	};

	handleDeleteTodo = id => {
		this.setState(prevState => {
			const prevTodos = prevState.todos;
			return {
				todos: prevTodos.filter(todo => (todo.id !== id ? todo : false))
			};
		});
	};

	getFilteredTodos = () => {
		const { todos, filter } = this.state;
		if (filter === ACTIVE_TODO || filter === COMPLETED_TODO) {
			return todos.filter(({ status }) => status === filter);
		} else {
			return todos;
		}
	};

	render() {
		const todos = this.getFilteredTodos();

		return (
			<div className="todoApp">
				<h1>Todo App</h1>
				<TodoInput handleAddTodo={this.handleAddTodo} />
				<TodoFilter currentFilter={this.state.filter} changeTodoFilter={this.changeTodoFilter} />
				<TodoList
					todos={todos}
					toggleTodoFilter={this.toggleTodoFilter}
					handleEditTodo={this.handleEditTodo}
					handleDeleteTodo={this.handleDeleteTodo}
				/>
			</div>
		);
	}
}
