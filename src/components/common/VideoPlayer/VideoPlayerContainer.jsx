import React from 'react';
import {connect} from 'react-redux';
import VideoPlayer from './VideoPlayer.jsx';
import {getMovieIdSelector} from './../../../redux/selectors.js';
import {FilmPropType} from './../../../utils/types.js';

class VideoPlayerContainer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isPlay: false
    };

    this.videoRef = React.createRef();
    this.onBtnPlayClick = this.onBtnPlayClick.bind(this);
  }

  onBtnPlayClick() {
    this.setState({isPlay: !this.state.isPlay}, () => {
      return !this.state.isPlay ? this.videoRef.current.pause() : this.videoRef.current.play();
    });
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <VideoPlayer
        videoRef={this.videoRef}
        videoLink={this.props.film.videoLink}
        backgroundImage={this.props.film.backgroundImage}
        id={this.props.film.id}
        onBtnPlayClick={this.onBtnPlayClick}
        isPlay={this.state.isPlay}
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
