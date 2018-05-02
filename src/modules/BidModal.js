import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Match from './Match.js';
import BidForm from './BidForm.js';

class BidModal extends React.Component {
  render() {
    return (
        <Modal isOpen={this.props.isOpen}>
          <ModalBody>
            <Match match={this.props.match}/>
          </ModalBody>
          <ModalBody>
            <BidForm match={this.props.match} />
          </ModalBody>
        </Modal>
    );
  }
}

export default BidModal;
