import style from './HelloWorld.css';
import React from 'react';

class HelloWorld extends React.Component
{
	render()
	{
		return (
			<h1 className={style.text}>Hello world!</h1>
		);
	}

}

export default HelloWorld;
