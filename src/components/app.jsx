import React from 'react'
import HelloWorld from './HelloWorld/HelloWorld'
import AppStore from '../stores/AppStore'
import events from '../events/appEvents'
import * as AppActions from '../actions/AppActions'

export default class App extends React.Component
{
    componentWillMount()
    {
      AppActions.setAppReady();
    }

    render()
    {
        return (
            <HelloWorld />
        );
    }
}
