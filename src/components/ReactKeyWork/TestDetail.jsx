import React, { Component } from 'react';

/* eslint-disable react/prop-types*/

function randomXToY(minVal, maxVal) {
	var randVal = minVal + Math.random() * (maxVal - minVal);
	return Math.round(randVal);
}

class A extends Component {
	componentWillMount() {
		console.log('Mount - A', this.props.currentKey);
	}

	componentWillReceiveProps(nextProps) {
		console.log('Receive Props - A', this.props.currentKey);
		console.log('Receive Props - A', nextProps.currentKey);
	}

	componentWillUnmount() {
		console.log('Unmount - A', this.props.currentKey);
	}

	render() {
		return <div>A-{this.props.currentKey}</div>;
	}
}

class B extends Component {
	componentWillMount() {
		console.log('Mount - B', this.props.currentKey);
	}

	componentWillReceiveProps(nextProps) {
		console.log('Receive Props - B', this.props.currentKey);
		console.log('Receive Props - A', nextProps.currentKey);
	}

	componentWillUnmount() {
		console.log('Unmount - B', this.props.currentKey);
	}

	render() {
		return <div>B-{this.props.currentKey}</div>;
	}
}

class C extends Component {
	componentWillMount() {
		console.log('Mount - C', this.props.currentKey);
	}

	componentWillReceiveProps(nextProps) {
		console.log('Receive Props - C', this.props.currentKey);
		console.log('Receive Props - A', nextProps.currentKey);
	}

	componentWillUnmount() {
		console.log('Unmount - C', this.props.currentKey);
	}

	render() {
		return <div>C-{this.props.currentKey}</div>;
	}
}

export default class TestDetail extends Component {
	constructor() {
		super();
		this.state = {};
	}
	componentWillMount() {
		fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=a')
			.then(res => res.json())
			.then(res => {
				this.setState({
					searchData: res
				});
			})
			.catch(() => {
				console.log('error');
			});
	}
	render() {
		const { searchData } = this.state;

		return (
			<div className="cardContainer">
				{searchData &&
					searchData.data.map((item, index) => {
						return (
							<div key={index} className="cardBox">
								<div className="posterImg">
									<img
										src={
											'https://images.pexels.com/photos/85745/pexels-photo-85745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
										}
										alt=""
									/>
								</div>
								<div className="posterContent">
									<div className="title">{item.Title}</div>
									<div className="type">{item.Type}</div>
									<div className="year">{item.Year}</div>
								</div>
							</div>
						);
					})}
				{/* <A {...this.props} />
				<B {...this.props} />
				<C {...this.props} /> */}
			</div>
		);
	}
}
