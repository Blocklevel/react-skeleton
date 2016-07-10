import React from 'react';
import gsap from 'gsap';
import GSAP from 'react-gsap-enhancer';
import HelloWorld from '../components/HelloWorld/HelloWorld';
import helloWorldStyle from '../components/HelloWorld/HelloWorld.css';

class Home extends React.Component
{

  transitionIn({target})
	{
		return TweenMax.from('.' + helloWorldStyle.text, 1, {
      scale: 0,
      y: '+=100',
      autoAlpha: 0,
      ease: Elastic.easeInOut
    });
	}

	componentDidMount()
	{
		this.addAnimation(this.transitionIn);
	}

  render()
  {
    return (
      <HelloWorld></HelloWorld>
    )
  }
}

export default GSAP()(Home);
