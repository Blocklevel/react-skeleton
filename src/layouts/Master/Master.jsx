import React  from 'react'
import Navigation from 'components/Navigation/Navigation';

/**
 * Global styles
 */
require('assets/css/base.css');

class Master extends React.Component 
{   
    render() {
        return (
	        <div>
	        	<Navigation />
	        	{this.props.children}
	        </div>
	    );
    }
}

export default Master;
