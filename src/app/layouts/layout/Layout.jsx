import React from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-transition-group';
import Navigation from 'app/components/Navigation/Navigation';
import style from './Layout.css';

@connect((store) =>
{
    return {
        ui: store.app.ui
    }
})
class Layout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            key: this.getKey(this.props.location.pathname)
        }
    }

    getKey(pathname)
    {
        let replacedPath = pathname.replace('/', '');
        return replacedPath == '' ? 'root' : replacedPath;
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({ key: this.getKey(nextProps.location.pathname) })
    }

    render()
    {
        return (
            <TransitionGroup component="div" className={style.base}>
                {React.cloneElement(this.props.children, {
                    ...this.props,
                    key: this.state.key,
                    className: style.page
                })}
            </TransitionGroup>
        )
    }
}

export default Layout;
