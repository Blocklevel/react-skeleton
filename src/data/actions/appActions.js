import events from 'data/events/appEvent';

export function appReady() {
    return {
        type: events.APP_READY,
        payload: 'READY'
    }
}
