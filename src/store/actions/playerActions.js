import * as events from '../events/playerEvent';

export function addPlayerStatusTypes(payload)
{
    return {
        type: events.ADD_STATUS_TYPES,
        payload
    }
}

export function updatePlayerStatus(status, index)
{
    return {
        type: events.UPDATE_PLAYER_STATUS,
        payload: { status, index }
    }
}

export function addVideo(payload)
{
    return {
        type: events.ADD_VIDEO,
        payload
    }
}

export function retrieveVideos(payload)
{
    return {
        type: events.RETRIEVE_VIDEOS,
        payload
    }
}

export function updatePlayerTotalTime(time, index)
{
    return {
        type: events.UPDATE_PLAYER_TOTAL_TIME,
        payload: { time, index }
    }
}

export function updatePlayerElapsedTime(time, index)
{
    return {
        type: events.UPDATE_PLAYER_ELAPSED_TIME,
        payload: { time, index }
    }
}

