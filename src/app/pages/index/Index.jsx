import React from 'react';
import style from './Index.css';
import { findDOMNode } from 'react-dom';

class Home extends React.Component
{
    componentDidMount()
    {
        const el = findDOMNode(this);
        let t = new TimelineMax();

        t.add(TweenMax.from(el, 1, {
            autoAlpha: 0,
            ease: Expo.easeOut
        }));

        t.add(TweenMax.from(el.querySelectorAll('h2'), 1, {
            scale: 0,
            autoAlpha: 0,
            y: '-=20',
            ease: Elastic.easeOut
        }), '-=0.5');
    }


    render()
    {
        return (
            <div className={style.base}>
                <h2 className={style.title}>React <em>skeleton</em></h2>
            </div>
        )
    }
}

export default Home;
