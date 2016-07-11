import React from 'react';
import { Link, IndexLink } from 'react-router';
import style from './Navigation.css';
import gsap from 'gsap';
import GSAP from 'react-gsap-enhancer';

class Navigation extends React.Component
{
  transitionIn({target})
  {
    let items = target.findAllInChildren();
    let timeline = new TimelineMax();

    timeline.staggerFrom(items, 1, {
      y: '-=30',
      autoAlpha: 0,
      ease: Expo.easeOut
    }, 0.2);

    return timeline;
  }

  componentDidMount()
	{
		this.addAnimation(this.transitionIn);
	}

  render()
  {
    return (
      <nav className={style.base}>
        <IndexLink activeClassName={style.linkActive} className={style.link} to="/">Home</IndexLink>
        <Link activeClassName={style.linkActive} className={style.link} to="about">About</Link>
        <Link activeClassName={style.linkActive} className={style.link} to="contact">Contact</Link>
      </nav>
    );
  }
}

export default GSAP()(Navigation);
