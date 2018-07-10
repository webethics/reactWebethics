import React, { Component } from 'react'; 
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
	Row
 } from 'reactstrap'; 
 
class UpdateCategory extends Component {  
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
						  <Input type="text" id="text-input" name="text-input" placeholder="Enter Name" value="Category" /> 
						</Col>
					  </FormGroup> 
					   <FormGroup row>
						<Col md="3">
						  <Label htmlFor="textarea-input">User Description</Label>
						</Col>
						<Col xs="12" md="9">
						  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9" placeholder="Description..."  value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
						</Col>
					  </FormGroup>    
					  <FormGroup row>
						<Col md="3">
						  <Label htmlFor="file-input">Category Pic</Label>
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

export default UpdateCategory;
