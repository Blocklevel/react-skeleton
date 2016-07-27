import React from 'react';
import { connect } from 'react-redux';
import { appReady } from 'data/actions/appActions';

@connect((store) =>
{
    return {
        app: store.app
    }
})
class About extends React.Component
{
    componentWillMount()
    {
        this.props.dispatch(appReady());
    }

    render()
    {
        return (
            <div>
                <p><em>[Redux flow test]</em> Application state: <strong>"{this.props.app.state}"</strong></p>
            </div>
        )
    }
}

export default About;
