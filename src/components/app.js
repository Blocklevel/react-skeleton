import React from 'react';
import HelloWorld from './HelloWorld/HelloWorld';

export default class App extends React.Component 
{
    render()
    {
        return (
            <div>
             <h1>React ready!</h1>
             <HelloWorld />
            </div>
        );
    }
}