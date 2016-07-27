import event from 'data/events/appEvent';

const defaultValues = {
    state: 'BOOTING',
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
    }

    return state;
};
