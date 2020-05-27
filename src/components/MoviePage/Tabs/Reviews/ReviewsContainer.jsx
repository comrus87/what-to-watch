import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Reviews from './Reviews.jsx';
import {getCommentsSelector} from './../../../../redux/selectors.js';
import {getFilmComments} from './../../../../redux/filmsReducer.js';

class ReviewsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.getFilmComments(this.props.id);
  }

  render() {
    return (
      <Reviews
        comments={this.props.comments}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: getCommentsSelector(state)
  };
};

export default connect(mapStateToProps, {getFilmComments})(ReviewsContainer);
