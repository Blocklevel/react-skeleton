import React from 'react';
import style from './Header.css';
import Navigation from '../Navigation/Navigation';

class Header extends React.Component {
	
    render() {
        return (
        	<header className={style.base}>
        		<Navigation />
        	</header>
        );
    }

}

export default Header;
