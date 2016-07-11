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

  actionHandler(action)
  {
    // add the action switch case
  }
}

const appStore = new AppStore();

dispatcher.register(appStore.actionHandler.bind(appStore));

export default appStore;
