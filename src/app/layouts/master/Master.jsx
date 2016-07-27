import React  from 'react'
import { connect } from 'react-redux';
import style from './Master.css';
import Navigation from 'app/components/Navigation/Navigation';
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
				<p><em>[Redux flow test]</em> Application state: <strong>"{this.props.app.state}"</strong></p>
	        	{this.props.children}
	        </div>
	    );
    }
}

export default Master;
