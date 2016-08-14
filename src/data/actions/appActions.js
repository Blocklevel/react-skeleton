import * as events from 'data/events/appEvent';

/**
 * ## Actions
 *
 * An action is a function which returns an object.
 * It must have a property called `type`, which is a string.
 * Everything else it's optional but, for convention, `payload` will be
 * the name of the property that will take care of all information.
 *
 * @example
 * export function enableNavigation()
 * {
 *      return {
 *          type: 'ENABLE_NAVIGATION',
 *          payload: true
 *      }
 *  }
 *
 *  ## Dispatch a change
 *
 *  To be able to dispatch a change in the application,
 *  connect the store to a component with the `connect` decorator
 *  provided by Redux.
 *  Use the `dispatch` method available in your `props` object
 *  and fire the action.
 *
 *  @example
 *  import { connect } from 'react-redux';
 *  import { appReady } from 'data/actions/appActions';
 *  import style from './Master.css';
 *
 *  @connect((store) => store)
 *  class ClassName extends React.Component
 *  {
 *      componentDidMount()
 *      {
 *          this.props.dispatch(appReady());
 *      }
 *  }
 *
 */

export function appReady()
{
    return {
        type: events.APP_READY,
        payload: true
    }
}
