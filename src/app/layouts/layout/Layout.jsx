import React from 'react';
import style from './Layout.css';
import { connect } from 'react-redux';

@connect((store) => store)
class Layout extends React.Component
{
    render()
    {
        return (
            <main className={style.base}>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        )
    }
}

export default Layout;
