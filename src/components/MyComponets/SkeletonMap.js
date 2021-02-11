import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

class SkeletonTable extends Component {
    render() {
        return (
            <>
                <Col lg="2" sm="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <Skeleton width={"54%"}/>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category"><Skeleton width={"27%"}/></p>
                                        <Card.Title as="h4"><Skeleton width={"34%"}/></Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="2" sm="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <Skeleton width={"54%"}/>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category"><Skeleton width={"27%"}/></p>
                                        <Card.Title as="h4"><Skeleton width={"34%"}/></Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="2" sm="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <Skeleton width={"54%"}/>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category"><Skeleton width={"27%"}/></p>
                                        <Card.Title as="h4"><Skeleton width={"34%"}/></Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="2" sm="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <Skeleton width={"54%"}/>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category"><Skeleton width={"27%"}/></p>
                                        <Card.Title as="h4"><Skeleton width={"34%"}/></Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="2" sm="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <Skeleton width={"54%"}/>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category"><Skeleton width={"27%"}/></p>
                                        <Card.Title as="h4"><Skeleton width={"34%"}/></Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="2" sm="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <Row>
                                <Col xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <Skeleton width={"54%"}/>
                                    </div>
                                </Col>
                                <Col xs="7">
                                    <div className="numbers">
                                        <p className="card-category"><Skeleton width={"27%"}/></p>
                                        <Card.Title as="h4"><Skeleton width={"34%"}/></Card.Title>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }
}

export default SkeletonTable;
