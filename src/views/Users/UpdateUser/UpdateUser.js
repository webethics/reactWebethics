import React, { Component } from 'react'; 
import {  
	Button, 
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
 } from 'reactstrap'; 
 
class UpdateUser extends Component {  
	render() {
		return (
		  <div className="animated fadeIn add_usr">
			<Row>
			  <Col md="12">
				<Card>
				  <CardHeader>
					<strong>Update User</strong>
				  </CardHeader>
				  <CardBody>
					<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
					  <FormGroup row>
						<Col md="3">
						  <Label htmlFor="text-input">Full Name</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="text" id="text-input" name="text-input" placeholder="Enter Name" value="John Doe" /> 
						</Col>
					  </FormGroup>
					   <FormGroup row>
						<Col md="3">
						  <Label htmlFor="text-input">Username</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="text" id="text-input" name="text-input" placeholder="Username" value="johndoe" />
						</Col>
					  </FormGroup>
					  <FormGroup row>
						<Col md="3">
						  <Label htmlFor="email-input">User Email</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" value="johndoe@gmail.com" /> 
						</Col>
					  </FormGroup> 
					  <FormGroup row>
						<Col md="3">
						  <Label>Gender</Label>
						</Col>
						<Col md="9">
						  <FormGroup check inline>
							<Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="male" checked />
							<Label className="form-check-label" check htmlFor="inline-radio1">Male</Label>
						  </FormGroup>
						  <FormGroup check inline>
							<Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="female" />
							<Label className="form-check-label" check htmlFor="inline-radio2">Female</Label>
						  </FormGroup> 
						</Col>
					  </FormGroup> 
					  <FormGroup row>
						<Col md="3">
						  <Label>Role</Label>
						</Col>
						<Col md="3"  xs="12" > 
						  <FormGroup> 
						  <Input type="select" name="roles" id="roles">
							<option value="">Select Role</option>
							<option value="customer">Customer</option>
							<option value="deliverer">Deliverer</option>
							<option value="brewiere" selected="selected">Brewiere</option>
							<option value="super admin">Super Admin</option> 
						  </Input>
						 </FormGroup>
						</Col>
					  </FormGroup>  
					   <FormGroup row>
						<Col md="3">
						  <Label htmlFor="text-input">Contact Number</Label>
						</Col>
						<Col xs="12" md="3">
						  <Input type="text" id="text-input" name="text-input" placeholder="Enter Contact Number" value="9812345670" />
						</Col>
					  </FormGroup>
					   <FormGroup row>
						<Col md="3">
						  <Label htmlFor="textarea-input">User Description</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9" placeholder="Description..." />
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
		  </div>
		)
	}
}

export default UpdateUser;
