import React from 'react';
import DefaultPageComponent from '../DefaultPageComponent';

class Home extends DefaultPageComponent
{
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
