import React, { Component } from 'react';

export default class ReactLifeCycles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 1
		};
	}
	componentWillMount() {
		// fetch('https://jsonplaceholder.typicode.com/photos')
		// 	.then(response => response.json())
		// 	.then(photos =>
		// 		this.setState({
		// 			photos
		// 		})
		// 	);
		setTimeout(() => {
			this.setState({ a: 2 });
		}, 0);
		// setTimeout(() => {
		// 	this.setState({
		// 		a: 2
		// 	});
		// }, 1000);
	}

	// handleClick(event) {
	// 	setTimeout(function() {
	// 		console.log(event.target.name);
	// 	}, 1000);
	// }

	render() {
		// const photos = this.state.photos || [];
		return (
			<div style={{ display: 'flex' }}>
				{/* <div style={{ flexDirection: 'row' }}>
					{photos.map((photo, index) => {
						return (
							<div style={{ backgroundColor: '#f2f2f2', width: 'fit-content' }} key={index}>
								<img
									onClick={this.handleClick}
									src={photo.thumbnailUrl}
									alt=""
									style={{ width: '200px', height: '200px' }}
								/>
								<h3 style={{ color: '#123456' }}>{photo.title}</h3>
							</div>
						);
					})}
				</div> */}
			</div>
		);
	}
}
