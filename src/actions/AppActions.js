import dispatcher from '../events/dispatcher'
import appEvents from '../events/appEvents'

export function setAppReady()
{
  dispatcher.dispatch({
    type: appEvents.APP_READY
  });
}
