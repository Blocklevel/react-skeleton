import dispatcher from 'data/events/dispatcher'
import appEvents from 'data/events/appEvents'

export function setReady()
{
  dispatcher.dispatch({
    type: appEvents.APP_READY
  });
}
