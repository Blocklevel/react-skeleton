import React from 'react';
import style from './Layout.css';

class Layout extends React.Component
{
    render()
    {
        return (
            <div className={style.base}>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Layout;
