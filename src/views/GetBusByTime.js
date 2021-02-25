import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {Button, Card, Col, Container, FormControl, InputGroup, Row, Table,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTimeBusByStationId} from "../redux/apiMobileV2/ApiMobileV2Action";
import {Link} from "react-router-dom";
import Skeleton from "../components/MyComponets/SkeletonTable";

function GetBus() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTimeBusByStationId(3285));
    }, [])

    const [search, setSearch] = React.useState();
    const data = useSelector(state => state.apiMobileV2Reducer.timeBusData);
    const station = useSelector(state => state.apiMobileV2Reducer.timeBusStationInfo);
    return (
        <>
            {/*<Container fluid style={{background: "black"}}>*/}
            <Container fluid>
                <Row style={{marginTop: 10}}>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={e => {
                                setSearch(e.target.value)
                            }}/>
                            <InputGroup.Prepend>
                                <InputGroup.Text><i className="nc-icon nc-zoom-split mr-1"/></InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Col>
                </Row>
                <Card>
                    <Card.Header>
                        <Card.Title as="h4">{station ? station.name : ''}</Card.Title>
                        <p className="card-category">
                            {station ? station.routes : ''}{" "}
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
                                                <th className="border-0">yo`nalish</th>
                                                <th className="border-0">Time</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {data && data.length > 0 ? data.map((item, index) =>
                                                <tr key={index++}>
                                                    <td>{item.routeName}</td>
                                                    <td>{item.routeKpp2}</td>
                                                    {/*<td>{item.time.slice(11, 20)}</td>*/}
                                                    <td>{item.time}</td>
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

export default GetBus;
