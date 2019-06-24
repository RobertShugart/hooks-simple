import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com');
	}

	render() {
		return <div>{this.props.resource}</div>;
	}
}

export default ResourceList;
