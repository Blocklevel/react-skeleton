import { EventEmitter } from 'events';
import _ from 'lodash';
import dispatcher from 'events/dispatcher';
import events from '../events/appEvents';

class AppStore extends EventEmitter
{
  constructor()
  {
    super();
  }

  appReady()
  {
    console.log('%cApp is ready!', 'color: green');
  }

  actionHandler(action)
  {
    switch (action.type)
    {
      default:
      {
        this.appReady();
      }
    }
  }
}

const appStore = new AppStore();

dispatcher.register(appStore.actionHandler.bind(appStore));

export default appStore;
