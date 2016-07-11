import React from 'react';
import Navigation from '../components/Navigation/Navigation';

class Layout extends React.Component
{

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
