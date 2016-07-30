import event from 'data/events/appEvent';

const defaultValues = {
    state: 'BOOTING',
    ui : {
        navigationEnabled: true
    }
};

export default function (state = defaultValues, action)
{
    switch (action.type)
    {
        case event.APP_READY:
        {
            state = {...state, state : action.payload};
            break;
        }
        case event.ENABLE_NAVIGATION:
        {
            state = {
                ...state,
                ui : {
                    ...state.ui,
                    navigationEnabled : action.payload
                }
            };
            break;
        }
        case event.DISABLE_NAVIGATION:
        {
            state = {
                ...state,
                ui : {
                    ...state.ui,
                    navigationEnabled : action.payload
                }
            };
            break;
        }
    }

    return state;
};
