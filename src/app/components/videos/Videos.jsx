import React from 'react';
import Player from 'app/components/skeleton-components/player/Player';
import {
    updatePlayerStatus,
    addVideo,
    updatePlayerTotalTime,
    updatePlayerElapsedTime,
    addPlayerStatusTypes
} from 'store/actions/playerActions';

class Videos extends React.Component
{
    onStatusChanges({target, data}, i)
    {
        this.props.dispatch(updatePlayerStatus(data, i));
        this.props.dispatch(updatePlayerElapsedTime(target.getCurrentTime(), i));
    }

    onPlayerReady({target}, i)
    {
        this.props.dispatch(updatePlayerTotalTime(target.getDuration(), i));
    }

    componentDidMount()
    {
        const { player: { videos }, dispatch } = this.props;

        dispatch(addPlayerStatusTypes(Player.statusTypes));

        if (!videos.length)
        {
            const videoIds = ['UiTsB5OUpA0', 'UiTsB5OUpA0'];
            videoIds.map(id => dispatch(addVideo(id)));
        }
    }

    renderVideos()
    {
        const { videos } = this.props.player;

        if (!videos.length)
        {
            return (
                <p>Video list it's empty.</p>
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
