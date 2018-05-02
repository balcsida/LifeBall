import React from 'react';

class UserScore extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.index}</th>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.amount}</td>
      </tr>
    );
  }
}

export default UserScore;
