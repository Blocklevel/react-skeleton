import React from 'react';
import gsap from 'gsap';
import GSAP from 'react-gsap-enhancer';
import style from './Home.css';
import * as AppActions from '../../actions/AppActions';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

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
        <HelloWorld text="Hello world!"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
      </div>
    )
  }
}

export default GSAP()(Home);
