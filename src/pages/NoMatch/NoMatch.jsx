import React from 'react';
import GSAP from 'react-gsap-enhancer';
import style from './NoMatch.css';

class Home extends React.Component
{
    render()
    {
        return (
            <div className={style.base}>
                <h1>Oops! Nothing here :(</h1>
            </div>
        )
    }
}

export default GSAP()(Home);
