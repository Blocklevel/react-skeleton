import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import DestroyMe from './DestroyMe';
import DefaultPageComponent from '../DefaultPageComponent';

class Contact extends DefaultPageComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            shouldShowComponent: true
        };
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
