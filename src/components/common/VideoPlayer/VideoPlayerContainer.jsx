import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer from './VideoPlayer.jsx';
import {getMovieIdSelector} from './../../../redux/selectors.js';
import {FilmPropType} from './../../../utils/types.js';
import {formatTimeVideo} from './../../../utils/utils.js';

class VideoPlayerContainer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isPlay: false,
      duration: ``,
      progress: 0
    };

    this.videoRef = React.createRef();
    this.onBtnPlayClick = this.onBtnPlayClick.bind(this);
    this.onLoadsetDuration = this.onLoadsetDuration.bind(this);
    this.onPlayerUpdateProgress = this.onPlayerUpdateProgress.bind(this);
    this.onBtnFullScreenClick = this.onBtnFullScreenClick.bind(this);
    this.onClickProgressRewind = this.onClickProgressRewind.bind(this);
  }

  onBtnPlayClick() {
    this.setState({isPlay: !this.state.isPlay}, () => {
      return !this.state.isPlay ? this.videoRef.current.pause() : this.videoRef.current.play();
    });
  }

  onLoadsetDuration() {
    const duration = formatTimeVideo(this.videoRef.current.duration);
    this.setState({duration});
  }

  onPlayerUpdateProgress() {
    const progress = this.videoRef.current.currentTime * 100 / this.videoRef.current.duration;
    this.setState({progress});

  }

  onBtnFullScreenClick() {
    const video = this.videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  onClickProgressRewind(evt) {
    const width = evt.target.offsetWidth;
    const currentX = evt.nativeEvent.offsetX;
    const currentPercent = currentX * 100 / width;

    this.setState({progress: currentPercent}, () => {
      this.videoRef.current.pause();
      this.videoRef.current.currentTime = this.videoRef.current.duration * (currentX / width);
      this.videoRef.current.play();
    });
  }

  render() {
    return (
      <VideoPlayer
        videoRef={this.videoRef}
        name={this.props.film.name}
        videoLink={this.props.film.videoLink}
        backgroundImage={this.props.film.backgroundImage}
        id={this.props.film.id}
        onBtnPlayClick={this.onBtnPlayClick}
        isPlay={this.state.isPlay}
        onLoadsetDuration={this.onLoadsetDuration}
        duration={this.state.duration}
        onPlayerUpdateProgress={this.onPlayerUpdateProgress}
        progress={this.state.progress}
        onBtnFullScreenClick={this.onBtnFullScreenClick}
        onClickProgressRewind={this.onClickProgressRewind}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: getMovieIdSelector(state),
  };
};

VideoPlayerContainer.propTypes = {
  film: FilmPropType
};

export default connect(mapStateToProps)(VideoPlayerContainer);
