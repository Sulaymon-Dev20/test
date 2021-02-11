import React, {useEffect, useState} from "react";
import {Button, Card, Carousel, Col, Container, Form, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getRouteData, getRouteStations} from "../redux/apiMobileV2/ApiMobileV2Action";
import SkeletonTable from "../components/MyComponets/SkeletonTable";
import Skeleton from "react-loading-skeleton";
import {useHistory} from "react-router-dom";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

function RouteValueStations() {
    const history = useHistory();
    const dispatch = useDispatch();
    const id = useSelector(state => state.apiMobileV2Reducer.routeId);
    useEffect(() => {
        dispatch(getRouteStations(id));
        dispatch(getRouteData(id));
    }, []);
    // const data = useSelector(state => state.apiMobileV2Reducer.routeStationsData);
    const kpp1 = useSelector(state => state.apiMobileV2Reducer.kpp1);
    const kpp2 = useSelector(state => state.apiMobileV2Reducer.kpp2);
    const dataBus = useSelector(state => state.apiMobileV2Reducer.timeBusData);
    const [root, setRoot] = React.useState(false);

    const CustomSkinMap = withScriptjs(withGoogleMap(() => (
            <GoogleMap
                defaultZoom={11.7}
                defaultCenter={{lat: 41.320052, lng: 69.253966}}
                defaultOptions={{
                    scrollwheel: false,
                    zoomControl: true,
                }}
            >
                {kpp1 ? kpp1.map((item, index) =>
                    kpp1 ? <Marker key={index++} visible={true} defaultTitle={"Station"}
                                   cursor={kpp1[index].sn} title={kpp1[index].sn}
                                   position={{lat: kpp1[index].lat, lng: kpp1[index].lng}}/> : ''
                ) : ''}
            </GoogleMap>
        ))
    );
    return (
        <>
            <Container fluid style={{background: "BAC5C8"}}>
                <Row>
                    <Col md={4}>
                        <Row>
                            <Col md="12">
                                <Card className="card-user">
                                    <div className="card-image">
                                        <img alt="..." src={require("assets/img/bus.jpeg").default}/>
                                    </div>
                                    <Card.Body>
                                        <div className="author">
                                            <div className="avatar border-gray"
                                                 style={{margin: "auto", backgroundColor: "cornflowerblue"}}><h2
                                                style={{
                                                    marginTop: 35,
                                                    color: "floralwhite"
                                                }}>{dataBus ? dataBus.name : "Loading"}</h2></div>
                                        </div>
                                        <p className="description text-center">
                                            {dataBus ? dataBus.kpp1 : "Loading"} <br/>
                                            <i className="nc-icon nc-refresh-02 text-danger"/><br/>
                                            {dataBus ? dataBus.kpp2 : "Loading"}<br/>
                                            <Button variant="danger" onClick={history.goBack}>Oldingi sahifaga
                                                qaytish </Button>
                                        </p>
                                    </Card.Body>
                                    <hr/>
                                    <div className="button-container mr-auto ml-auto">
                                        <Button
                                            className="btn-simple btn-icon"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            variant="link"
                                        >
                                            <i className="fab fa-facebook-square"/>
                                        </Button>
                                        <Button
                                            className="btn-simple btn-icon"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            variant="link"
                                        >
                                            <i className="fab fa-twitter"/>
                                        </Button>
                                        <Button
                                            className="btn-simple btn-icon"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            variant="link"
                                        >
                                            <i className="fab fa-google-plus-square"/>
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col md="12" style={{height: 721}}>
                                <Card className="card-user">
                                    <CustomSkinMap
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDS4sGjQ5hi3IFNYa0dYGyuxmNZzPwv1jc"
                                        loadingElement={<div style={{height: `100%`}}/>}
                                        containerElement={<div style={{height: `80vh`}}/>}
                                        mapElement={<div style={{height: `100%`}}/>}
                                    />
                                    <div className="button-container mr-auto ml-auto">
                                        <Button
                                            className="btn-simple btn-icon"
                                            // onClick={() => history.push("/admin/maps")}
                                            variant="link"
                                        >
                                            Xaritadan aftobus yo`nalishini ko`rish
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col md="12">
                                <Card>
                                    <Carousel>
                                        <Carousel.Item interval={1000}>
                                            <img
                                                className="d-block w-100"
                                                src="https://www.sustainable-bus.com/wp-content/uploads/2019/10/ebusco_30_front_01-1.jpg"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <img
                                                className="d-block w-100"
                                                src="https://528008-1681258-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/Ebusco_3.0_front_02-1.jpg"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="https://528008-1681258-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/Ebusco_3.0_rear_01-1.jpg"
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                    <div className="button-container mr-auto ml-auto btn-simple">
                                            Aftobusning atdo rusumi
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <Col md="12">
                            <Card className="strpied-tabled-with-hover">
                                <Card.Header>
                                    <Card.Title as="h4"><i className="nc-icon nc-spaceship text-primary"/>
                                        {" "}{dataBus ? dataBus.name + " o`tadigan bekatlari" : <Skeleton/>}
                                    </Card.Title>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Yo`nalishni tanlang !</Form.Label>
                                        <Form.Control as="select" onChange={e => setRoot(e.target.value)}>
                                            {kpp1.length > 0 && kpp2.length > 0 ?
                                                <>
                                                    <option value={false}>{kpp2[0].sn} ➡➡ {kpp1[0].sn}</option>
                                                    <option value={false}>{kpp1[0].sn} ➡➡ {kpp2[0].sn}</option>
                                                </> : <Skeleton/>
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                </Card.Header>
                                <Card.Body className="table-full-width table-responsive px-0">
                                    <Table className="table-hover table-striped">
                                        <thead>
                                        <tr>
                                            <th className="border-0"><i className="nc-icon nc-map-big"/></th>
                                            <th className="border-0">Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {kpp1 && kpp2 ? root ?
                                            kpp1.map((item, index) =>
                                                <tr key={index++}>
                                                    <td style={{width: 43}}><i className="fab fa-google"/></td>
                                                    <td>{item.sn}</td>
                                                </tr>
                                            ) : kpp2.map((item, index) =>
                                                <tr key={index++}>
                                                    <td style={{width: 43}}><i className="fab fa-google"/></td>
                                                    <td>{item.sn}</td>
                                                </tr>
                                            )
                                            : <SkeletonTable/>}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default RouteValueStations;
