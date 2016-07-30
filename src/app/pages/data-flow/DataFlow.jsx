import React from 'react';
import { enableNavigation, disableNavigation } from 'data/actions/appActions';

class DataFlow extends React.Component
{
    toggleNavigationTransitions()
    {
        this.props.dispatch(this.props.ui.navigationEnabled ? disableNavigation() : enableNavigation());
    }

    render()
    {
        return (
            <div>
                <p><em>[Redux flow]</em> Navigation state: <strong>{this.props.ui.navigationEnabled}</strong></p>
                <button onClick={this.toggleNavigationTransitions.bind(this)}>Change navigation behavior</button>
            </div>
        )
    }
}

export default DataFlow;
