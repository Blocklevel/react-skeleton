import React from 'react';
import Player from 'app/components/skeleton-components/player/Player';
import * as actions from 'store/actions/playerActions';
import axios from 'axios';
import { batchActions } from 'redux-batched-actions';

class Videos extends React.Component
{
    onStatusChanges({target, data}, i)
    {
        this.props.dispatch(batchActions([
            actions.updatePlayerStatus(data, i),
            actions.updatePlayerElapsedTime(target.getCurrentTime(), i)
        ]));
    }

    onPlayerReady({target}, i)
    {
        this.props.dispatch(batchActions([
            actions.addPlayerStatusTypes(Player.statusTypes),
            actions.updatePlayerTotalTime(target.getDuration(), i)
        ]));
    }

    componentDidMount()
    {
        this.props.dispatch(actions.retrieveVideos(axios.get('src/static/videos.json')));
    }

    renderVideos()
    {
        const { videos, fetchingVideos, retrieveVideosError, retrieveErrorMessage } = this.props.player;

        if (fetchingVideos)
        {
            return (
                <p>Loading...</p>
            )
        }

        if (retrieveVideosError)
        {
            return (
                <p>{retrieveErrorMessage}</p>
            )
        }

        if (!videos.length)
        {
            return (
                <p>No videos.</p>
            )
        }

        return videos.map((video, i) =>
            <Player
                key={i}
                videoId={video.id}
                restorePlayer={true}
                status={video.status}
                elapsedTime={video.elapsedTime}
                totalTime={video.totalTime}
                onStatusChange={event => this.onStatusChanges(event, i)}
                onPlayerReady={event => this.onPlayerReady(event, i)}
            ></Player>
        );
    }

    render()
    {
        return (
            <div>
                {this.renderVideos()}
            </div>
        )
    }
}

export default Videos;
