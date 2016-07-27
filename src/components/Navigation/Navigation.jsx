import gsap  from 'gsap'
import React  from 'react'
import GSAP  from 'react-gsap-enhancer'
import { Link, IndexLink } from 'react-router'
import style  from './Navigation.css'

class Navigation extends React.Component
{

 

  transitionIn({target})
  {
    return new TimelineMax().staggerFrom(target.findAll(), 1, {
      y: '-=100',
      autoAlpha: 0,
      ease: Expo.easeOut
    }, 0.2);
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
