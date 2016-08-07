import React from 'react';
import GSAP from 'react-gsap-enhancer';
import Img from 'app/components/skeleton-components/ui/img/Img';
import style from './NoMatch.css';
import { Link } from 'react-router';

class Home extends React.Component
{
    render()
    {
        return (
            <div className={style.base}>
                <h1>404</h1>
                <p>We couldn't find it! Please go back to the <Link className={style.link} to="/">home page</Link></p>
                <Img className={style.image} src="404.gif"></Img>
            </div>
        )
    }
}

export default GSAP()(Home);
