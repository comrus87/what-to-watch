import React from 'react';

const withActiveItem = (Component) => (
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: -1
      };

      this._handlerActiveCard = this._handlerActiveCard.bind(this);
    }

    _handlerActiveCard(id) {
      this.setState({activeCard: id});
    }

    render() {
      return (
        <Component {...this.props}
          onCardActive={this._handlerActiveCard}
          activeCard={this.state.activeCard}
        />
      );
    }
  }
);

export default withActiveItem;
