import dispatcher from '../events/dispatcher'
import appEvents from '../events/appEvents'

export function setReady()
{
  dispatcher.dispatch({
    type: appEvents.APP_READY
  });
}
