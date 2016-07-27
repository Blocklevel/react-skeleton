import React from 'react';
import GSAP from 'react-gsap-enhancer';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>Oops! Nothing here :(</h1>
            </div>
        )
    }
}

export default GSAP()(Home);
