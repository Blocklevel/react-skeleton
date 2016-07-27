import React from 'react';
import GSAP from 'react-gsap-enhancer';

class About extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>About page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quo sint recusandae.</p>
            </div>
        )
    }
}

export default GSAP()(About);
