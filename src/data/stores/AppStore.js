import { EventEmitter } from 'events';
import dispatcher from 'data/events/dispatcher';
import events from 'data/events/appEvents';

class AppStore extends EventEmitter
{
  constructor()
  {
    super();
  }

  actionHandler(action)
  {
    switch (action.type)
    {
      case events.APP_READY:
      {
        // do stuff!
      }
    }
  }
}

const appStore = new AppStore();

dispatcher.register(appStore.actionHandler.bind(appStore));

export default appStore;
