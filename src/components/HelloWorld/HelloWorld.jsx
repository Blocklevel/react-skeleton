import style from './HelloWorld.css';
import gsap from 'gsap';
import GSAP from 'react-gsap-enhancer';
import React from 'react';

class HelloWorld extends React.Component
{
	moveAnimation({target})
	{
		return TweenMax.from(target, 1, { scale: 0, y: '+=100', autoAlpha: 0, ease: Elastic.easeInOut });
	}

	componentDidMount()
	{
		this.addAnimation(this.moveAnimation);
	}

	render()
	{
		return (
			<h1 className={style.text}>Hello world!</h1>
		);
	}

}

export default GSAP()(HelloWorld);
