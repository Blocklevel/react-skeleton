import React  from 'react'
import style from './Master.css';

class Master extends React.Component
{
	render() {
        return (
	        <div className={style.base}>
	        	{this.props.children}
	        </div>
	    );
    }
}

export default Master;
