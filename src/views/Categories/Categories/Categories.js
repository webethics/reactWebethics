import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

import categoriesData from './CategoriesData'

function CategoryRow(props) { 
  const category = props.category
  const catLink = `#/categories/category/${category.id}`
  const catDetailLink = `#/categories/update-category/${category.id}`
  const nolink = `#`
 
  return (
    <tr key={category.id.toString()}>
        <th scope="row"><a href={catLink}>{category.id}</a></th>
        <td><a href={catLink}>{category.name}</a></td>  
        <td><AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} checked /></td> 
		<td><a href={catDetailLink}> <i className="icon-pencil icons font"></i></a> <i className="icon-close icons font"></i></td> 
    </tr>
  )
}

class Categories extends Component {

  render() {

    const categoryList = categoriesData.filter((category) => category.id < 10)

    return (
      <div className="animated fadeIn usr_list">
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Categories
              </CardHeader>
              <CardBody>
                <Table responsive hover striped>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th> 
                      <th scope="col">Status</th> 
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryList.map((category, index) =>
                      <CategoryRow key={index} category={category}/>
                    )}
                  </tbody>
                </Table> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Categories;
