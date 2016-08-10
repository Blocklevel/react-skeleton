import React from 'react';
import { enableNavigation, disableNavigation } from 'data/actions/appActions';
import DefaultPageComponent from '../DefaultPageComponent';

class DataFlow extends DefaultPageComponent
{
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
