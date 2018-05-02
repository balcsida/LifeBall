import React from 'react';
import Match from './Match.js';
import BetButton from './BetButton.js';
import OddsHelper from './OddsHelper.js';
import BidModal from './BidModal.js';


class MatchDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-7 pt-1">
            <Match match={this.props.match}/>
        </div>
        <div className="col-md-3">
          <OddsHelper match={this.props.match}/>
        </div>
        <div className="col-md-2 pt-4-5">
          <BetButton toggleModal={this.toggleModal} />
        </div>
        <BidModal show={this.state.isOpen} toggleModal={this.toggleModal} isOpen={this.state.isOpen} match={this.props.match} />
      </div>
    );
  }
}

export default MatchDisplay;
