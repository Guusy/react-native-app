import React, { Component } from 'react';
import Video from 'react-native-video';
import LayoutVideo from '../components/LayoutVideo';
class Player extends Component {
  render() {
    return (
      <LayoutVideo>
         <Video
            source={{ uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
            onBuffer={(b) => console.log("buffering", b)}
            paused={false}
            resizeMode="contain"
            style={{
              position:'absolute',
    left:0,
    right:0,
    bottom:0,
    top:0,
            }}
          />

      </LayoutVideo>
    )

  }
}

export default Player
