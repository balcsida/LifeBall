import React from 'react';
import UserScore from './UserScore.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ScoreBoard extends React.Component {
  render() {
    return (
      <div className="col-md-4 pt-2 aside shadow">
        <BootstrapTable className="mr-2" data={this.props.users} height='250px' scrollTop={ 'top' } striped hover search>
          <TableHeaderColumn isKey dataField="rank">Rank</TableHeaderColumn>
          <TableHeaderColumn dataField='username'>Player</TableHeaderColumn>
          <TableHeaderColumn dataField='amount' searchable="false">Ballance</TableHeaderColumn>
        </BootstrapTable>,
      </div>
    );
  }
}

export default ScoreBoard;
