import React from 'react';

class BetButton extends React.Component {

  render() {
    return (
      <div>
        <div className="bet-button" alt="Bid button" onClick={this.props.toggleModal}></div>
      </div>
    );
  }
}

export default BetButton;
