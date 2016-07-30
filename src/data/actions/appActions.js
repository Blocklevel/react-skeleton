import events from 'data/events/appEvent';

export function appReady()
{
    return {
        type: events.APP_READY,
        payload: 'READY'
    }
}

export function enableNavigation()
{
    return {
        type: events.ENABLE_NAVIGATION,
        payload: true
    }
}

export function disableNavigation()
{
    return {
        type: events.DISABLE_NAVIGATION ,
        payload: false
    }
}
