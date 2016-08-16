import React  from 'react'
import { IndexLink } from 'react-router'
import style  from './Navigation.css'

class Navigation extends React.Component
{
    render()
    {
        const { enabled } = this.props;

        return (
            <nav className={style.base}>
                <nav className={style.base + ' ' + (typeof enabled === 'undefined' || enabled ? '' : style.disabled)}>
                    <IndexLink activeClassName={style.linkActive} className={style.link} to="/">Home</IndexLink>
                </nav>
            </nav>
        );
    }
}

Navigation.propTypes = {
    enabled:React.PropTypes.bool,
    // routes:React.PropTypes.array.isRequired
};

Navigation.defaultProps = {
    enabled: true
};

export default Navigation;