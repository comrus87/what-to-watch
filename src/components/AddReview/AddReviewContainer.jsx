import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AddReview from './AddReview.jsx';
import {getMovieIdSelector} from './../../redux/selectors.js';
import {FilmPropType} from './../../utils/types.js';
import {postComment} from './../../redux/filmsReducer.js';

class AddReviewContainer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      textReview: ``,
      isShowMessage: false
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const id = this.props.film.id;

    const comment = {
      rating: this.state.rating,
      comment: this.state.textReview
    };

    if (comment.rating) {
      this.props.postComment(id, comment);
    } else {
      this.setState({isShowMessage: true});
    }
  }

  onFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});

    if (name === `rating`) {
      this.setState({isShowMessage: false});
    }
  }

  render() {
    return (
      <AddReview
        film={this.props.film}
        onFormSubmit={this.onFormSubmit}
        onFieldChange={this.onFieldChange}
        isShowMessage={this.state.isShowMessage}
      />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    film: getMovieIdSelector(state)
  };
};

const mapDispatchToProps = {
  postComment
};

AddReviewContainer.propTypes = {
  film: FilmPropType,
  postComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewContainer);
