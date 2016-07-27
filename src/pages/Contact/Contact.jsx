import React from 'react';
import GSAP from 'react-gsap-enhancer';
import style from './Contact.css';

class Contact extends React.Component
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
            <h2>Contact page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quo sint recusandae.</p>
        </div>
    )
  }
}

export default GSAP()(Contact);
