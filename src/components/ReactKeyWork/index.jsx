import React, { Component } from 'react';
import TestDetail from './TestDetail';

import 'styles/index.scss';

export default class ReactKeyWork extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentKey: 0
		};
	}

	onLiClick = currentKey => event => {
		this.setState({ currentKey });
	};

	render() {
		return (
			<div className="react-key-work">
				{/* <div className="left-div">
					<ul>
						{Array(5)
							.fill('Test')
							.map((value, key) => (
								<li key={key} onClick={this.onLiClick(key)}>
									<span>{`${value}-${key}`}</span>
								</li>
							))}
					</ul>
				</div> */}
				<div className="right-div">
					<TestDetail />
				</div>
			</div>
		);
	}
}
