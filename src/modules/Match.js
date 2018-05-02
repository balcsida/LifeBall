import React from 'react';

import Hungary from '../resources/pictures/flags/Hungary.GIF';
import India from '../resources/pictures/flags/India.GIF';
import France from '../resources/pictures/flags/France.GIF';
import Italy from '../resources/pictures/flags/Italy.GIF';
import Spain from '../resources/pictures/flags/Spain.GIF';
import England from '../resources/pictures/flags/England.GIF';
import MatchDate from './MatchDate.js';


class Match extends React.Component {
  render(props) {
    const flags ={Hungary,India,France,Italy,Spain,England}
    return (
      <div className="row text-center mx-2">
        <div className="col-2 ticket-date shadow">
          <MatchDate date={this.props.match.date} />
        </div>
        <div className="col-10 ticket-card shadow">
          <div className="row">
            <div className="col-5 ">
              <img src={flags[this.props.match.home]} alt="flag" height="50" />
              <div>{this.props.match.home}</div>
            </div>
            <div className="col-2 ">
              <div>VS</div>
              <div>Group C</div>
            </div>
            <div className="col-5 ">
              <img src={flags[this.props.match.away]} alt="flag" height="50" />
              <div>{this.props.match.away}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
