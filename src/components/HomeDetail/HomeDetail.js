import React from 'react';
import { Button, Card, CardDeck, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './HomeDetail.css';
import { faArrowRight, faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
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
                        <Row className="img-row">
                            <Col className="coxbazar-img size">
                                <h5 className="bottom-left">COX'S BAZAR</h5>
                            </Col>
                            <Col className="sreemongle-img size">
                                <h5 className="bottom-left">SREEMONGLE</h5>
                            </Col>
                            <Col className="sundorbans-img size">
                                <h5 className="bottom-left">SUNORBANS</h5>
                            </Col>  
                        </Row>                      
                    </Col>
                </Row>
                
            </Container>
            <div className="centered">
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                    <FontAwesomeIcon icon={faChevronCircleRight} />
            </div>
        </div>
    );
};

export default HomeDetail;