import style from './HelloWorld.css';
import React from 'react';

export default class App extends React.Component 
{
    render()
    {
        return (
            <h1 className={style.welcome}>Hello world!</h1>
        );
    }
}