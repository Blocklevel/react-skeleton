import React  from 'react'
import style from './Master.css';
import Navigation from 'app/components/Navigation/Navigation';

class Master extends React.Component 
{
    render() {
        return (
	        <div className={style.base}>
	        	<Navigation />
	        	{this.props.children}
	        </div>
	    );
    }
}

export default Master;
