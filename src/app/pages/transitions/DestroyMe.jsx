import React from 'react';


class DestroyMe extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidAppear()
    {
        TweenMax.fromTo(this.refs.text, 1, {
            autoAlpha:0,
            x: -50
        },{
            autoAlpha: 1,
            x: 0,
            ease: Expo.easeOut
        });
    }

    componentWillEnter (callback)
    {
        TweenMax.fromTo(this.refs.text, 1, {
            autoAlpha:0,
            x: -50
        },{
            autoAlpha: 1,
            x: 0,
            ease: Expo.easeOut,
            onComplete: callback
        });
    }

    componentWillLeave (callback) {
        TweenMax.to(this.refs.text, 1, {
            autoAlpha: 0,
            x: -50,
            ease: Expo.easeOut,
            onComplete: callback
        });
    }

    render()
    {
        return (
            <p ref="text">I'm a component!</p>
        )
    }
}

export default DestroyMe;