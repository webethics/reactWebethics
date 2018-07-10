import React, { Component } from 'react';
/* import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'; */

import { 
	Badge,
	Button,
	ButtonDropdown, 
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Col,
	Collapse, 
	Fade,
	Form,
	FormGroup,
	FormText,
	FormFeedback,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label,
	Row, 
	Dropdown,
	Container
 } from 'reactstrap'; 
 

class UserProfile extends Component {
  render() {
    return (
      <div className="flex-row align-items-center usr_profile">
        <Container>
          <Row className="justify-content-center">
           <Col md="12">
				<Card>
				  <CardHeader>
					<strong>Update User</strong>
				  </CardHeader>
				  <CardBody>
					<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
					  <FormGroup row>
						<Col md="3">
						  <Label htmlFor="text-input">Name</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="text" id="text-input" name="text-input" placeholder="Name" value="John Doe" /> 
						</Col>
					  </FormGroup>
					   <FormGroup row>
						<Col md="3">
						  <Label htmlFor="text-input">Username</Label>
						</Col>
						<Col xs="12" md="9">
						   <Label htmlFor="text-input">johndoe</Label>
						</Col>
					  </FormGroup>
					  <FormGroup row>
						<Col md="3">
						  <Label htmlFor="email-input">User Email</Label>
						</Col>
						<Col xs="12" md="9"> 
						   <Label htmlFor="text-input">johndoe@gmail.com</Label>
						</Col>
					  </FormGroup>
					   
					  <FormGroup row>
						<Col md="3">
						  <Label htmlFor="file-input">Profile Pic</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="file" id="file-input" name="file-input" />
						</Col>
					  </FormGroup> 
					</Form>
				  </CardBody>
				  <CardFooter>
					<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
					<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
				  </CardFooter>
				</Card> 
			  </Col> 
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
