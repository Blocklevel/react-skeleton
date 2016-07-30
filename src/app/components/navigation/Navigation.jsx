import React  from 'react'
import { Link, IndexLink } from 'react-router'
import style  from './Navigation.css'

class Navigation extends React.Component
{
    render()
    {
        const { enabled } = this.props;

        return (
            <nav className={style.base}>
                <nav className={style.base + ' ' + (enabled ? '' : style.disabled)}>
                    <IndexLink activeClassName={style.linkActive} className={style.link} to="/">Home</IndexLink>
                    <Link activeClassName={style.linkActive} className={style.link} to="data-flow">Data Flow</Link>
                    <Link activeClassName={style.linkActive} className={style.link} to="transitions">Transitions</Link>
                </nav>
            </nav>
        );
    }
}

export default Navigation;
