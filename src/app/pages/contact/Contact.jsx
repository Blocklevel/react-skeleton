import React from 'react';
import GSAP from 'react-gsap-enhancer';

@GSAP()
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
                <p>This page has an example of transition in animation</p>
            </div>
        )
  }
}

export default Contact;
