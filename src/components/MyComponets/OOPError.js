import React, {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

class OOPError extends Component {
    render() {
        return (
            <Col md="12">
                <Card className="card-user">
                    <div className="card-image"/>
                    <Card.Body>
                        <div className="author">
                            <img
                                alt="..."
                                src={require("assets/img/notify.svg").default}
                            />
                            <h5 className="title">OOP ERROR 😥</h5>
                            <p className="description"><a href="http://t.me/sulaymon_yahyo">Contact the programmer</a></p>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
            </Col>
        );
    }
}

export default OOPError;
