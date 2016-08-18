import React from 'react';
import Player from 'app/components/skeleton-components/player/Player';
import * as actions from 'store/actions/playerActions';
import axios from 'axios';

class Videos extends React.Component
{
    onStatusChanges({target, data}, i)
    {
        this.props.dispatch(actions.updatePlayerStatus(data, i));
        this.props.dispatch(actions.updatePlayerElapsedTime(target.getCurrentTime(), i));
    }

    onPlayerReady({target}, i)
    {
        this.props.dispatch(actions.updatePlayerTotalTime(target.getDuration(), i));
    }

    componentDidMount()
    {
        const { dispatch } = this.props;

        dispatch(actions.addPlayerStatusTypes(Player.statusTypes));
        dispatch(actions.retrieveVideos(axios.get('src/static/videos.json')));
    }

    renderVideos()
    {
        const { videos } = this.props.player;

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
