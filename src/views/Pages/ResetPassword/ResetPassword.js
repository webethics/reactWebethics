import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class ResetPassword extends Component {
  render() {
    return (
      <div className="flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Reset Password</h1>
                    <p className="text-muted"></p>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Confirm Password" />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Reset</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0" href="#/login">Login</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card> 
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResetPassword;
