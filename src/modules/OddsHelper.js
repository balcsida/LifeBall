import React from 'react';

class OddsHelper extends React.Component {
  render() {
    return (
      <table class="table table-striped table-dark score-text odds-helper shadow mt-1">
        <thead>
          <tr>
            <th colspan="3" className="text-center">Odds:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{this.props.match.home}</th>

            <td>{this.props.match.odds.home}</td>
          </tr>
          <tr>
            <th scope="row">{this.props.match.away}</th>
            <td>{this.props.match.odds.away}</td>
          </tr>
          <tr>
            <th scope="row">Draw</th>
            <td>{this.props.match.odds.draw}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default OddsHelper;
