import React, {useState} from "react";
import {Card, Col, Container, FormControl, InputGroup, Row,} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getRouteProps, setRouteId} from "../redux/apiMobileV2/ApiMobileV2Action.js";
import SkeletonBusCards from "../components/MyComponets/SkeletonBusCards.js"
import {useHistory} from "react-router-dom";
import OOPError from "../components/MyComponets/OOPError";

function RouteProps() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');
    React.useEffect(() => {
        dispatch(getRouteProps())
    }, [])

    const data = useSelector(state => state.apiMobileV2Reducer.routePropsData);
    const status = useSelector(state => state.apiMobileV2Reducer.routePropsStatus);
    let indexFor = 1;
    const filter = () => {
        indexFor++;
        if (indexFor === 1) {
            return "nc-icon nc-bus-front-12 text-primary";
        } else if (indexFor === 2) {
            return "nc-icon nc-bus-front-12 text-warning";
        } else if (indexFor === 3) {
            return "nc-icon nc-bus-front-12 text-success";
        } else if (indexFor === 4) {
            indexFor = 1;
            return "nc-icon nc-bus-front-12 text-danger";
        }
    };


    const sendNewPage = (id) => {
        dispatch(setRouteId(id)).then(history.push(`/route`));
    };

    return (
        <>
            <Container fluid>
                <Row>
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
                <Row>
                    {status !== "WARNING" ? data && data.length > 0 ? data.filter((item) => {
                        if (search === "") {
                            return item;
                        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                            return item;
                        }
                    }).map((item, index) =>
                        <Col lg="3" sm="6" key={index++}>
                            <Card className="card-stats" onClick={() => sendNewPage(item.route_id)}>
                                <Card.Body>
                                    <Row>
                                        <Col xs="5">
                                            <div className="icon-big text-center icon-warning">
                                                <i className={filter()}/>
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
                                <Card.Footer>
                                    <hr/>
                                    <div>
                                        <i className="nc-icon nc-refresh-02 text-danger mr-1"/>
                                        {"  "}{item.kpp1.length > 10 ? item.kpp1.slice(0, 10) + "..." : item.kpp1}
                                    </div>
                                    <br/>
                                    <div>
                                        <i className="nc-icon nc-refresh-02 text-success mr-1"/>
                                        {"  "}{item.kpp2.length > 10 ? item.kpp2.slice(0, 10) + "..." : item.kpp2}
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ) : <SkeletonBusCards/> : <OOPError/>}
                </Row>
            </Container>
        </>
    );
}

export default RouteProps;
