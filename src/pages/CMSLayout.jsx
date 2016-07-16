import React from 'react';
import Navigation from '../components/Navigation/Navigation';

class CMSLayout extends React.Component 
{
    render() {
        return (
        	<main>
        		<Navigation />
        		<h1>Using another layout</h1>
        		{this.props.children}
        	</main>
        );
    }
}

export default CMSLayout;
