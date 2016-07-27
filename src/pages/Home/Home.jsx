import React from 'react';
import GSAP from 'react-gsap-enhancer';
import style from './Home.css';
import * as AppActions from '../../data/actions/AppActions';

class Home extends React.Component
{
    transitionIn({target})
    {
        return TweenMax.from(target, 1, {
            x: '-=100',
            autoAlpha: 0,
            ease: Expo.easeOut
        });
    }

	componentDidMount()
	{
        AppActions.setReady();
        this.addAnimation(this.transitionIn);
	}

    render()
    {
        return (
            <div className={style.base}>
                <h2>Home page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quo sint recusandae.</p>
            </div>
        )
    }
}

export default GSAP()(Home);
