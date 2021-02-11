import "react-multi-carousel/lib/styles.css";
import "../components/Other/style.css";

import React, {useState} from "react";
import {GoogleMap, Marker, Polyline, withGoogleMap, withScriptjs} from "react-google-maps";
import {useDispatch, useSelector} from "react-redux";
import {getRouteProps, getRouteStations} from "../redux/apiMobileV2/ApiMobileV2Action";
import {Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import OOPError from "../components/MyComponets/OOPError";
import SkeletonMap from "../components/MyComponets/SkeletonMap";

export default function Maps() {
    const dispatch = useDispatch();
    const [routeId, setRouteId] = useState(550);
    const [search, setSearch] = useState('');
    const [point, setPoint] = useState([]);
    React.useEffect(() => {
        dispatch(getRouteStations(routeId));
        dispatch(getRouteProps())
    }, []);
    const busInfo = useSelector(state => state.apiMobileV2Reducer.routeStationsData);
    const data = useSelector(state => state.apiMobileV2Reducer.routePropsData);
    const stations = busInfo ? busInfo.kpp1 : 0;

    const CustomSkinMap = withScriptjs(withGoogleMap(() => (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={
                    {lat: 41.320052, lng: 69.253966}}
                defaultOptions={{
                    scrollwheel: false,
                    zoomControl: true,
                }}
            >
                <Polyline
                    path={busInfo.kpp2}
                    options={{
                        strokeColor: '#0436ff',
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        icons: [{
                            icon: "hello",
                            offset: '0',
                            repeat: '10px'
                        }],
                    }}
                />

                {stations ? stations.map((item, index) =>
                    stations ? <Marker key={index++} visible={true} defaultTitle={"Station"} cursor={stations[index].sn}
                                       title={stations[index].sn}
                                       position={{lat: stations[index].lat, lng: stations[index].lng}}/> : ''
                ) : ''}
            </GoogleMap>
        ))
    );

    const getBackend = (routeId) => {
        dispatch(getRouteStations(routeId));
    };

    return (
        <>
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
            {/*            <Fragment>
                <Section>
                    <WithScrollbar/>
                </Section>
            </Fragment>*/}
            <Row>
                {status !== "WARNING" ? data && data.length > 0 ? data.filter((item) => {
                    if (search === "") {
                        return item;
                    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item;
                    }
                }).slice(0, 6).map((item, index) =>
                    <Col lg="2" sm="6" key={index++}>
                        <Card className="card-stats" onClick={() => getBackend(item.route_id)}>
                            <Card.Body>
                                <Row>
                                    <Col xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-bus-front-12 text-primary"/>
                                        </div>
                                    </Col>
                                    <Col xs="7">
                                        <div className="numbers">
                                            <p className="card-category">id:{item.route_id}</p>
                                            <Card.Title as="h4">{item.name}</Card.Title>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ) : <SkeletonMap/> : <OOPError/>}
            </Row>
            <CustomSkinMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDS4sGjQ5hi3IFNYa0dYGyuxmNZzPwv1jc"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `60vh`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        </>
    );
};