import React from 'react';
import gsap from 'gsap';
import GSAP from 'react-gsap-enhancer';
import style from './Home.css';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

class Home extends React.Component
{

  componentDidEnter()
  {
    console.log('123')
  }

  transitionIn({target})
	{
		return TweenMax.from(target, 1, {
      x: '-=100',
      autoAlpha: 0,
      ease: Expo.easeOut
    });
	}

  transitionOut({target})
  {
    return TweenMax.to(target, 1, {
      x: '+=100',
      autoAlpha: 0,
      ease: Expo.easeOut
    });
  }

	componentDidMount()
	{
		this.addAnimation(this.transitionIn);
	}

  componentWillUnmount()
  {

  }

  render()
  {
    return (
      <div className={style.base}>
        <HelloWorld text="Home page!"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
      </div>
    )
  }
}

export default GSAP()(Home);
