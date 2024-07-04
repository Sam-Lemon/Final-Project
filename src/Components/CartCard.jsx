import React from "react";
import Counter from "./Counter";
import { Card, CardBody, Row, Col, CardImg } from 'react-bootstrap/';



export default function CartCard ({ cartSucculent, onDelete }) {
    const calcTotalPrice = (quantity, price) => {
        return (quantity * price).toFixed(2);
    };

    const handleDeleteSucculent = () => {
        onDelete(cartSucculent.id);
    };


    return(
        <Card className="rounded-3 mb-4" key={cartSucculent.id}>
            <CardBody className="p-4">
                <Row className="justify-content-between align-items-center">
                    <Col md="2" lg="2" xl="2">
                    <CardImg className="rounded-3" fluid
                        src={cartSucculent.img}
                        alt={cartSucculent.scientificName}
                        />
                    </Col>

                    <Col md="3" lg="3" xl="3">
                        <h3>PLANT NAME{cartSucculent.scientificName}</h3>
                    </Col>

                    <Col md="3" lg="3" xl="2" className="d-flex align-items-center justify-content-around">
                        <Counter />
                    </Col>

                    <Col md="3" lg="2" xl="2" className="offset-lg-1">
                        <p tag="h5" className="mb-0">
                            ${calcTotalPrice(cartSucculent.quantity, cartSucculent.price)}
                        </p>
                    </Col>

                    <Col md="1" lg="1" xl="1" className="text-end">
                        <a href="#!" className="text-danger" onClick={handleDeleteSucculent}>
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        );
    }

