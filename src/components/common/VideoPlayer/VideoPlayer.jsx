import React from 'react';
import PropTypes from 'prop-types';
import history from './../../../history.js';

const film = {
  name: `Once Upon a Time in America`,
  posterImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
  previewImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
  backgroundImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
  backgroundColor: `#CBAC79`,
  description: `A former Prohibition-era Jewish gangster returns...`,
  rating: 9.9,
  scoresCount: 276395,
  director: `Sergio Leone`,
  starring: [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`],
  runTime: 229,
  genre: `Crime`,
  released: 1984,
  id: 1,
  isFavorite: false,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};


const VideoPlayer = ({videoRef, videoLink, backgroundImage, id, isPlay, onBtnPlayClick}) => {

  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster={backgroundImage}></video>

      <button onClick={() => history.push(`/movie/${id}`)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
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

          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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
  onBtnPlayClick: PropTypes.func.isRequired
};


export default VideoPlayer;
