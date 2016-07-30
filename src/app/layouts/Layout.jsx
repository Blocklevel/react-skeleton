import React from 'react';
import { connect } from 'react-redux';

@connect((store) =>
{
  return {
    ui: store.app.ui
  }
})
class Layout extends React.Component
{
  render()
  {
    return (
      <main>
        {React.cloneElement(this.props.children, this.props)}
      </main>
    )
  }
}

export default Layout;
