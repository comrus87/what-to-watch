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
      textReview: ``
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

    this.props.postComment(id, comment);
  }

  onFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <AddReview
        film={this.props.film}
        onFormSubmit={this.onFormSubmit}
        onFieldChange={this.onFieldChange}
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
