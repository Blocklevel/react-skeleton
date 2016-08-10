import React from 'react';
import { connect } from 'react-redux';
import TransitionGroupPlus from 'react-transition-group-plus';
import style from './Layout.css';

@connect((store) =>
{
    return {
        ui: store.app.ui
    }
})
class Layout extends React.Component
{
    getKey(pathname)
    {
        let replacedPath = pathname.replace('/', '');
        return replacedPath == '' ? 'root' : replacedPath;
    }

    render()
    {
        let children = React.Children.toArray(this.props.children);
        let node = children[0] || null;

        return (
            <TransitionGroupPlus
                transitionMode="out-in"
                component="div"
                className={style.base}>
                {React.cloneElement(node, {
                    ...this.props,
                    key: this.getKey(this.props.location.pathname)
                })}
            </TransitionGroupPlus>
        )
    }
}

export default Layout;
