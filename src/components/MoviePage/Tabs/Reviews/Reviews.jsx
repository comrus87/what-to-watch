import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Review from './Review/Review.jsx';
import {getCommentsSelector} from './../../../../redux/selectors.js';


const Reviews = ({comments}) => {

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">

          {comments.length !== 0
            ? comments.map((c) =>
              <Review
                key={c.id}
                rating={c.rating}
                comment={c.comment}
                date={c.date}
                user={c.user}
              />
            )
            : <div className="review">No reviews yet</div>
          }

        </div>
      </div>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired
  }))
};

const mapStateToProps = (state) => {
  return {
    comments: getCommentsSelector(state)
  };
};

export default connect(mapStateToProps)(Reviews);
