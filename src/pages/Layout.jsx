import React from 'react';
import { Link } from 'react-router';
import appEvents from '../events/appEvents';
import * as AppActions from '../actions/AppActions';
import Navigation from '../components/Navigation/Navigation';

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
        <Navigation/>
        {this.props.children}
      </main>
    )
  }
}

export default Layout;
