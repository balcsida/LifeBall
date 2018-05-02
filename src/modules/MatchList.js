import React from 'react';
import MatchDisplay from './MatchDisplay.js';

class MatchList extends React.Component {

  render() {
    const Matches = () => (
      <div className="col-md-8">
        {this.props.matches.map(match =>
          <div className="match-card">
            <MatchDisplay match={match} />
          </div>
        )}
      </div>
    );

    return (
      <Matches />
    );
  }
}

export default MatchList;
