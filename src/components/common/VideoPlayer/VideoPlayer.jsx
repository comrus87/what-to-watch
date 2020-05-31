import React from 'react';
import PropTypes from 'prop-types';
import history from './../../../history.js';


const VideoPlayer = (props) => {

  const {videoRef,
    name,
    videoLink,
    backgroundImage,
    id,
    isPlay,
    onBtnPlayClick,
    onLoadsetDuration,
    duration,
    onPlayerUpdateProgress,
    progress,
    onBtnFullScreenClick,
    onClickProgressRewind
  } = props;

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        onLoadedMetadata={onLoadsetDuration}
        onTimeUpdate={onPlayerUpdateProgress}
      ></video>

      <button onClick={() => history.push(`/movie/${id}`)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress onClick={onClickProgressRewind} className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{duration}</div>
        </div>

        <div className="player__controls-row">

          {isPlay
            ? <button onClick={onBtnPlayClick} type="button" className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>

            : <button onClick={onBtnPlayClick} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          }

          <div className="player__name">{name}</div>

          <button onClick={onBtnFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoRef: PropTypes.object.isRequired,
  videoLink: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPlay: PropTypes.bool.isRequired,
  onBtnPlayClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onLoadsetDuration: PropTypes.func.isRequired,
  duration: PropTypes.string.isRequired,
  onPlayerUpdateProgress: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  onBtnFullScreenClick: PropTypes.func.isRequired,
  onClickProgressRewind: PropTypes.func.isRequired
};


export default VideoPlayer;
