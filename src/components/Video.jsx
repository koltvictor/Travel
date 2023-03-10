import React from 'react';
import ReactPlayer from 'react-player';

export default function Video() {
  return (
    <div className="videoPlayer">
        <ReactPlayer
            url='https://youtu.be/hhwa17z_0PA'
            playing={true}
            width='100%'
            height='100%'
            controls={false}
            onEnded={() => this.refs.player.seekTo(0)}
            muted={true}
            loop={true}
            playsInLine={true}
        />
    </div>
  )
}
