import React from 'react';
import { connect } from 'react-redux';

@connect((store) =>
{
    return {
        app: store.app
    }
})
class About extends React.Component
{
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
