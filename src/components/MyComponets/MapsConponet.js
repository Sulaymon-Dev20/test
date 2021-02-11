import React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useDispatch, useSelector} from "react-redux";
import {getRouteStations} from "../../redux/apiMobileV2/ApiMobileV2Action";
import "./MapCss.css";

export default function Maps() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.apiMobileV2Reducer.routeStationsData);
    const routeId = useSelector(state => state.apiMobileV2Reducer.routeId);
    console.log(routeId)
    React.useEffect(() => {
        dispatch(getRouteStations(routeId ? routeId : 550));
    }, []);
    const stations = data ? data.kpp1 : 0;

    const CustomSkinMap = withScriptjs(withGoogleMap(() => (
            <GoogleMap
                defaultZoom={11.7}
                defaultCenter={{lat: 41.320052, lng: 69.253966}}
                defaultOptions={{
                    scrollwheel: false,
                    zoomControl: true,
                }}
            >
                {stations ? stations.map((item, index) =>
                    stations ? <Marker key={index++} visible={true} defaultTitle={"Station"}
                                       cursor={stations[index].sn} title={stations[index].sn}
                                       position={{lat: stations[index].lat, lng: stations[index].lng}}/> : ''
                ) : ''}
            </GoogleMap>
        ))
    );

    return (
        <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDS4sGjQ5hi3IFNYa0dYGyuxmNZzPwv1jc"
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `80vh`}}/>}
            mapElement={<div style={{height: `100%`}}/>}

        />
    );
};