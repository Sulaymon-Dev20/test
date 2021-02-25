import React from "react";
import {Card, Col, Container, FormControl, InputGroup, Row, Table,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTimeBusByStationId} from "../redux/apiMobileV2/ApiMobileV2Action";
import {Link} from "react-router-dom";
import "../css/styleStation.css";
import Skeleton from "../components/MyComponets/SkeletonTable";
import Bus from "../assets/img/bus.svg";
import TurnRight from "../assets/img/turn-right.svg";
import Clock from "../assets/img/clock.svg";

function GetBus2() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTimeBusByStationId(5462));
    }, [])

    const [search, setSearch] = React.useState();
    const data = useSelector(state => state.apiMobileV2Reducer.timeBusData);
    const station = useSelector(state => state.apiMobileV2Reducer.timeBusStationInfo);
    return (
        <>
            {/*<Container fluid style={{background: "black"}}>*/}
            <div className="mybus__top">
                <h1>My<span>Bus</span></h1>
                <p>February 24, 2021 , 4:45 pm</p>
                {/*February 24, 2021 , 4:45 pm*/}
            </div>

            <Container fluid>
{/*                <Row style={{marginTop: 10}}>
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
                                                    <td>{item.time.slice(11, 20)}</td>
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
                </Card>*/}
                <div className="mybus__main">
                    <p>{station ? station.name : ''}</p>
                    <table>
                        <tr className="mybus__inner">
                            <td>
                                <img src={Bus} alt="bus"/>
                                <p>Aftobus</p>
                            </td>
                            <td>
                                <img src={TurnRight} alt="turn-right"/>
                                <p>Yo`nalish</p>
                            </td>
                            <td>
                                <img src={Clock} alt="clock"/>
                                <p>Vaqti</p>
                            </td>
                        </tr>
                        {data && data.length > 0 ? data.map((item, index) =>
                            <tr className="mybus__inner" key={index++}>
                                <td><p>{item.routeName}</p></td>
                                <td><p>{item.routeKpp2}</p></td>
                                {/*<td>p{item.time.slice(11, 20)}</td>*/}
                                <td><p>{item.time}</p></td>
                            </tr>
                        ) : <Skeleton/>}
{/*                        <tr className="mybus__inner">
                            <td>
                                <p>58 - A</p>
                            </td>
                            <td>
                                <p>Massive Do`stlik - 2</p>
                            </td>
                            <td>
                                <p>12 min</p>
                            </td>
                        </tr>
                        <tr className="mybus__inner">
                            <td>
                                <p>38 - A</p>
                            </td>
                            <td>
                                <p>Massive Sergeli - 10</p>
                            </td>
                            <td>
                                <p>10 min</p>
                            </td>
                        </tr>
                        <tr className="mybus__inner">
                            <td>
                                <p>38 - A</p>
                            </td>
                            <td>
                                <p>Massive Sergeli - 10</p>
                            </td>
                            <td>
                                <p>10 min</p>
                            </td>
                        </tr>
                        <tr className="mybus__inner">
                            <td>
                                <p>38 - A</p>
                            </td>
                            <td>
                                <p>Massive Sergeli - 10</p>
                            </td>
                            <td>
                                <p>10 min</p>
                            </td>
                        </tr>
                        <tr className="mybus__inner">
                            <td>
                                <p>38 - A</p>
                            </td>
                            <td>
                                <p>Massive Sergeli - 10</p>
                            </td>
                            <td>
                                <p>10 min</p>
                            </td>
                        </tr>*/}

                    </table>
                </div>

            </Container>
        </>
    );
}

export default GetBus2;
