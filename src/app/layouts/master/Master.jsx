import React  from 'react'
import style from './Master.css';
import Navigation from 'app/components/Navigation/Navigation';
import { connect } from 'react-redux';
import { appReady } from 'data/actions/appActions';

@connect((store) =>
{
	return {
		app: store.app
	}
})
class Master extends React.Component 
{
	componentWillMount()
	{
		this.props.dispatch(appReady());
	}

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
