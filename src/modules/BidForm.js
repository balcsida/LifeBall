import React from 'react';
import { Button, Form, FormGroup, Label, Col, Input, ModalFooter} from 'reactstrap';

class BidForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row className="px-2">
          <Col xs={3}>
            <Label for={this.props.match.home} className="pt-2">{this.props.match.home}</Label>
          </Col>
          <Col xs={2}>
            <Label for={this.props.match.home} className="pt-2">{this.props.match.odds.home}</Label>
          </Col>
          <Col xs={7}>
            <Input className="align-right" type="number" name="home" id={this.props.match.home} placeholder="amount of bid" />
          </Col>
        </FormGroup>
        <FormGroup row className="px-2">
          <Col xs={3}>
            <Label for={this.props.match.away} className="pt-2">{this.props.match.away}</Label>
          </Col>
          <Col xs={2}>
            <Label for={this.props.match.away} className="pt-2">{this.props.match.odds.away}</Label>
          </Col>
          <Col xs={7}>
            <Input type="number" name="away" id={this.props.match.away} placeholder="amount of bid" />
          </Col>
        </FormGroup>
        <FormGroup row className="px-2">
          <Col xs={3}>
            <Label for={this.props.match.draw} className="pt-2">Draw</Label>
          </Col>
          <Col xs={2}>
            <Label for={this.props.match.draw} className="pt-2">{this.props.match.odds.draw}</Label>
          </Col>
          <Col xs={7}>
            <Input type="number" name="draw" id={"draw"+this.props.match.match_id} placeholder="amount of bid" />
          </Col>
        </FormGroup>
        <ModalFooter>
          <Button className="float-right">Submit</Button>
        </ModalFooter>
      </Form>
    );
  }
}

export default BidForm;
