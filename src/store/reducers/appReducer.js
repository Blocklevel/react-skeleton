import * as events from '../events/appEvent';

/**
 * ## Default state
 *
 * Every reducer requires a default state.
 *
 * @type {{locales: {lang: string, messages: {}}, ready: boolean}}
 */
const defaultValues = {
    locales: {
        lang: 'en',
        messages: {}
    }
};

/**
 * ## Reducer
 *
 * A reducer is a pure function that takes a state and an action as parameters.
 * The action then is checked via switch statement and it returns a new state:
 * which is a not mutated object.
 * A reducer must return always a state.
 *
 * @example
 * export default function (state = defaultValues, action)
 * {
 *      switch (action.type)
 *      {
 *          case APP_READY:
 *          {
 *              return state = { ...state, ready: true };
 *          }
 *          default:
 *          {
 *              return state;
 *          }
 *      }
 *  };
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = defaultValues, action)
{
    

    switch (action.type)
    {
        default:
        {
            return state;
        }
    }
};
