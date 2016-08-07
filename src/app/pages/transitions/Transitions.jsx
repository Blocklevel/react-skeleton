import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import DestroyMe from './DestroyMe';

class Contact extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            shouldShowComponent: true
        };
    }

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

    toggleBox() {
        this.setState({
            shouldShowComponent: !this.state.shouldShowComponent
        });
    }

    render()
    {
        return (
            <div ref="container">
                <h2>Transitions examples</h2>
                <button onClick={this.toggleBox.bind(this)}>
                    {this.state.shouldShowComponent ? 'Destroy me!' : 'Initialize me!'}
                </button>
                <TransitionGroup component="div">
                    { this.state.shouldShowComponent && <DestroyMe/>}
                </TransitionGroup>
            </div>
        )
    }
}

export default Contact;
