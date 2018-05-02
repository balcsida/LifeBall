import React from 'react';

class MatchDate extends React.Component {
  render(props) {
    const date = new Date(this.props.date);
    return (
            <span className="match-date text-center">
            <br></br>
              {date.toLocaleString()}
            </span>
    );
  }
}

export default MatchDate;
