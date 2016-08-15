import React from 'react';
import style from './Index.css';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <h2 className={style.title}>React <em>skeleton</em></h2>
            </div>
        )
    }
}

export default Home;
