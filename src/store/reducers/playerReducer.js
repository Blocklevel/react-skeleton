import * as events from '../events/playerEvent';
import _ from 'lodash';

const defaultValues = {
    videos: [],
    status: 'IDLE',
    statusTypes: []
};

export default function (state = defaultValues, action)
{
    switch (action.type)
    {
        case events.ADD_STATUS_TYPES:
        {
            return state = { ...state, statusTypes: action.payload }
        }

        case events.UPDATE_PLAYER_STATUS:
        {
            const { index, status } = action.payload;
            const newStatus = _.find(state.statusTypes, { value: status });

            return state = {
                ...state,
                videos : [
                    ...state.videos.slice(0, index),
                    {...state.videos[index], status: newStatus.type },
                    ...state.videos.slice(index + 1)
                ]
            };
        }

        case events.UPDATE_PLAYER_ELAPSED_TIME:
        {
            const { index, time } = action.payload;

            return state = {
                ...state,
                videos : [
                    ...state.videos.slice(0, index),
                    {...state.videos[index], elapsedTime: time },
                    ...state.videos.slice(index + 1)
                ]
            }
        }

        case events.UPDATE_PLAYER_TOTAL_TIME:
        {
            const { index, time } = action.payload;

            return state = {
                ...state,
                videos : [
                    ...state.videos.slice(0, index),
                    {...state.videos[index], totalTime: time },
                    ...state.videos.slice(index + 1)
                ]
            }
        }

        case events.ADD_VIDEO:
        {
            return state = { ...state, videos: [
                ...state.videos,
                {
                    id: action.payload,
                    status: state.status,
                    elapsedTime: 0,
                    totalTime: 0
                }
            ]};
        }
        default:
        {
            return state;
        }
    }
};
