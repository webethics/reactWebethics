import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import categoriesData from './CategoriesData'

class Category extends Component {

  render() {

    const category = categoriesData.find( category => category.id.toString() === this.props.match.params.id)

    const categoryDetails = category ? Object.entries(category) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong>Category id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        categoryDetails.map(([key, value]) => {
                          return (
                            <tr>
                              <td class="row_head"  >{`${key}`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
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

export default Category;
