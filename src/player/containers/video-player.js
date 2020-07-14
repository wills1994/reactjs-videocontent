import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state={
    pause:true,
    duration: 0,
    currentTime: 0,
    loading: false,
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
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }
  handleFullScreenClick = event => {
    if(document.webkitIsFullScreen){
      document.webkitExitFullscreen()
    } else if(document.mozFullScreen) {
      document.mozCancelFullScreen()
    } else{
      if ( this.player.webkitRequestFullscreen ) {
        this.player.webkitRequestFullscreen()
      } else if ( this.player.mozRequestFullScreen ) {
        this.player.mozRequestFullScreen()
      }
    }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title
          title='Esto es una prueba'
        />
        <Controls>
          <Timer
          duration={this.state.duration}
          currentTime={this.state.currentTime}
        />
        <ProgressBar
        duration={this.state.duration}
        value={this.state.currentTime}
        handleProgressChange={this.handleProgressChange}
        />
       <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
       <Volume
       handleVolumeChange={this.handleVolumeChange}
     />
     <FullScreen
       handleFullScreenClick={this.handleFullScreenClick}
     />
       </Controls>
      <Spinner
      active={this.state.loading}
      />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleTimeUpdate={this.handleTimeUpdate}
          handleLoadedMetadata={this.handleLoadedMetadata}
          src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;