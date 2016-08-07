import React from 'react';
import SharerEmail from 'app/components/skeleton-components/sharer/SharerEmail';

class Home extends React.Component
{

    componentWillAppear(callback)
    {
        TweenMax.fromTo(this.refs.container, 1, {
            autoAlpha:0,
            x: -50
        },{
            autoAlpha: 1,
            x: 0,
            ease: Expo.easeOut,
            onComplete: callback
        });
    }

    componentDidEnter (callback) {
        TweenMax.fromTo(this.refs.container, 1, {
            autoAlpha:0,
            x: -50
        },{
            autoAlpha: 1,
            x: 0,
            ease: Expo.easeOut
        });
    }

    componentWillLeave (callback) {
        TweenMax.to(this.refs.container, 1, {
            autoAlpha:0,
            x: -50,
            ease: Expo.easeOut,
            onComplete: callback
        });
    }

    render()
    {
        return (
            <div ref="container">
                <h2>React Skeleton!</h2>
            </div>
        )
    }
}

export default Home;
