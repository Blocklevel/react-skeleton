import React  from 'react'
import { connect } from 'react-redux';
import { appReady } from 'data/actions/appActions';
import Navigation from 'app/components/Navigation/Navigation';

@connect((store) =>
{
	return {
		ui: store.app.ui
	}
})
class Master extends React.Component 
{
    render() {
        return (
	        <div>
				<Navigation enabled={this.props.ui.navigationEnabled}></Navigation>
	        	{this.props.children}
	        </div>
	    );
    }
}

export default Master;
