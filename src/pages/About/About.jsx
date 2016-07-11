import React from 'react';
import gsap from 'gsap';
import GSAP from 'react-gsap-enhancer';
import style from './About.css';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

class About extends React.Component
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
		this.addAnimation(this.transitionIn);
	}

  render()
  {
    return (
      <div className={style.base}>
        <HelloWorld text="About page!"/>
      </div>
    )
  }
}

export default GSAP()(About);
