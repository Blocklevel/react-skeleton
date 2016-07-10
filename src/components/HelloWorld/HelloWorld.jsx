import style from './HelloWorld.css';
import React from 'react';

class HelloWorld extends React.Component
{
	constructor(props)
	{
		super(props);

		this.props
	}
	render()
	{
		return (
			<h1 className={style.text}>{this.props.text}</h1>
		);
	}

}

export default HelloWorld;
