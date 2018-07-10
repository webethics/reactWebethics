import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `#/users/${user.id}`
  const userDetailLink = `#/users/details/${user.id}`
  const nolink = `#`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }
  

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={userLink}>{user.id}</a></th>
        <td><a href={userLink}>{user.name}</a></td> 
        <td>{user.role}</td>
        <td><AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} checked /></td> 
		<td><a href={userDetailLink}> <i className="icon-pencil icons font"></i></a> <i className="icon-close icons font"></i></td> 
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn usr_list">
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users
              </CardHeader>
              <CardBody>
                <Table responsive hover striped>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th> 
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
				<nav>
					<Pagination>
						<PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
						<PaginationItem active>
						<PaginationLink tag="button">1</PaginationLink>
					</PaginationItem>
					<PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
					</Pagination>
				</nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
