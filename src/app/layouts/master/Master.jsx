import React  from 'react'
import { connect } from 'react-redux';
import { appReady } from 'data/actions/appActions';
import Navigation from 'app/components/Navigation/Navigation';
import style from './Master.css';

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
	        <div className={style.base}>
				<Navigation enabled={this.props.ui.navigationEnabled}></Navigation>
	        	{this.props.children}
	        </div>
	    );
    }
}

export default Master;
