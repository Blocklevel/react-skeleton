import React from 'react';
import GSAP from 'react-gsap-enhancer';

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
            <div>
                <h2>Contact page</h2>
                <p>This page has an example of gsap animation</p>
            </div>
        )
  }
}

export default GSAP()(Contact);
