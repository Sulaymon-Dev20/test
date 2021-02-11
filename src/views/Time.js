import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {Button, Card, Col, Container, Row, Table,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTimeBusByStationId} from "../redux/apiMobileV2/ApiMobileV2Action";
import {Link} from "react-router-dom";
import Skeleton from "../components/MyComponets/SkeletonTable";

function Notifications() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTimeBusByStationId(3285));
    }, [])

    const data = useSelector(state => state.apiMobileV2Reducer.timeBusData);
    const station = useSelector(state => state.apiMobileV2Reducer.timeBusStationInfo);
    return (
        <>
            <div className="rna-container">
                <NotificationAlert/>
            </div>
            <Container fluid>
                <Card>
                    <Card.Header>
                        <Card.Title as="h4">{station.name}</Card.Title>
                        <p className="card-category">
                            {station.routes}{" "}
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <div className="places-buttons">
                            <Row>
                                <Col md="12">
                                    <Card.Body className="table-full-width table-responsive px-0">
                                        <Table className="table-hover table-striped">
                                            <thead>
                                            <tr>
                                                <th className="border-0">Bus</th>
                                                <th className="border-0">kpp1</th>
                                                <th className="border-0">kpp2</th>
                                                <th className="border-0">Time</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data && data.length > 0 ? data.map((item, index) =>
                                                <tr key={index++}>
                                                    <td>{item.routeName}</td>
                                                    <td>{item.routeKpp1}</td>
                                                    <td>{item.routeKpp2}</td>
                                                    <td>{item.time.slice(11, 20)}</td>
                                                </tr>
                                            ) : <Skeleton/>}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Col>
                                <Col className="offset-md-3 text-center" md="6">
                                    <Card.Title as="h4">Open in google map</Card.Title>
                                    <p className="card-category">
                                        <Link to="/admin/maps">
                                            <small>Click to view notifications</small>
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Notifications;
