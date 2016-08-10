import React from 'react';
import GSAP from 'react-gsap-enhancer';

@GSAP()
class DefaultPageComponent extends React.Component
{

    componentDidAppear()
    {

    }

    transitionOut({target})
    {
        return TweenMax.to(target, 2, {
            autoAlpha: 0,
            ease: Expo.easeOut
        });
    }

    transitionIn({target})
    {
        return TweenMax.fromTo(target, 2, {
            autoAlpha:0
        },{
            autoAlpha: 1,
            ease: Expo.easeOut
        });
    }

    componentWillEnter (callback)
    {
        callback();
    }

    componentWillLeave (callback)
    {
        callback();
    }
}

export default DefaultPageComponent;