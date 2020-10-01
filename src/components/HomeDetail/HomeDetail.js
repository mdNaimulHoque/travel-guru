import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomeDetail.css';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeDetail = () => {
    return (
        <div className="homeDetail-container">
            <Container>
                <Row>
                    <Col className="homeDetail-part1">
                        <h1>COX'S BAZAR</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism center and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Button variant="warning"> Booking  <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Col>
                    <Col>
                        <h1>This is num 2</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeDetail;