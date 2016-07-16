import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class Layout extends React.Component
{

  render()
  {
    return (
      <main>
        <Header />
        {this.props.children}
        <Footer />
      </main>
    )
  }
}

export default Layout;
