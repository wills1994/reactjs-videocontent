import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';

class VideoPlayer extends Component {
  state={
    pause:true,
    duration: 0,
    currentTime: 0,
  }
  togglePlay =(event) =>{
    this.setState({
      pause:!this.state.pause
    })
  }
  componentDidMount(){
    this.setState({
      pause:(!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  }
  handleProgressChange = event => {
    // event.target.value
    this.video.currentTime = event.target.value
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido!"
        />
        <Controls>
          <Timer
          duration={this.state.duration}
          currentTime={this.state.currentTime}
        />
        </Controls>
        <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;