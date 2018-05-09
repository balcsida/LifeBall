import React from 'react';

class BetButton extends React.Component {

  render() {
    return (
      <div>
        <div className="bet-button text-white pt-3" alt="Bid button" onClick={this.props.toggleModal}>BID</div>
      </div>
    );
  }
}

export default BetButton;
