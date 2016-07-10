import React from 'react';
import appEvents from '../events/appEvents';
import * as AppActions from '../actions/AppActions';


class Layout extends React.Component
{

  componentWillMount()
  {
      AppActions.setReady();
  }

  render()
  {
    return (
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default Layout;
