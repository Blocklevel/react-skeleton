import React from 'react';
import { enableNavigation, disableNavigation } from 'data/actions/appActions';

class DataFlow extends React.Component
{
    componentDidAppear()
    {
        TweenMax.fromTo(this.refs.container, 1, {
            autoAlpha:0,
            x: -50
        },{
            autoAlpha: 1,
            x: 0,
            ease: Expo.easeOut
        });
    }

    componentDidEnter (callback) {
        TweenMax.fromTo(this.refs.container, 1, {
            autoAlpha:0,
            x: -50
        },{
            autoAlpha: 1,
            x: 0,
            ease: Expo.easeOut
        });
    }

    componentWillLeave (callback) {
        TweenMax.to(this.refs.container, 1, {
            autoAlpha:0,
            x: -50,
            ease: Expo.easeOut,
            onComplete: callback
        });
    }

    toggleNavigationState()
    {
        this.props.dispatch(this.props.ui.navigationEnabled ? disableNavigation() : enableNavigation());
    }

    render()
    {
        return (
            <div ref="container">
                <h2>Redux examples</h2>
                <p>Navigation state: <strong>{this.props.ui.navigationEnabled ? 'enabled' : 'disabled'}</strong></p>
                <button onClick={this.toggleNavigationState.bind(this)}>Toggle navigation state</button>
            </div>
        )
    }
}

export default DataFlow;
