import axios from 'axios'
import {api, getRoute, getTimeBus, routeProps} from '../../api/apis'

export const BEGIN_ROUTE_PROPS = 'BEGIN_ROUTE_PROPS';
export const SUCCESS_ROUTE_PROPS = 'SUCCESS_ROUTE_PROPS';
export const ERROR_ROUTE_PROPS = 'ERROR_ROUTE_PROPS';

export const getRouteProps = () => async dispatch => {
    dispatch({type: BEGIN_ROUTE_PROPS});
    try {
        const res = await axios.get(api + routeProps);
        dispatch({type: SUCCESS_ROUTE_PROPS, payload: res.data});
    } catch (e) {
        dispatch({type: ERROR_ROUTE_PROPS});
        console.error("Error");
    }
};

export const BEGIN_ROUTE_STATIONS = 'BEGIN_ROUTE_STATIONS';
export const SUCCESS_ROUTE_STATIONS = 'SUCCESS_ROUTE_STATIONS';
export const ERROR_ROUTE_STATIONS = 'ERROR_ROUTE_STATIONS';

export const getRouteStations = (id) => async dispatch => {
    dispatch({type: BEGIN_ROUTE_STATIONS});
    console.log("Begin");
    try {
        const res = await axios.get("http://localhost:8010/api/mobile/v2/getByRoot/" + id);
        dispatch({type: SUCCESS_ROUTE_STATIONS, payload: res.data});
    } catch (e) {
        dispatch({type: ERROR_ROUTE_STATIONS});
        console.error("ro Error");
    }
};

export const BEGIN_TIME_BUS = 'BEGIN_TIME_BUS';
export const SUCCESS_TIME_BUS = 'SUCCESS_TIME_BUS';
export const ERROR_TIME_BUS = 'ERROR_TIME_BUS';

export const getTimeBusByStationId = (id) => async dispatch => {
    dispatch({type: BEGIN_TIME_BUS});
    console.log("Begin bus time");
    try {
        const res = await axios.get(api + getTimeBus + id);
        dispatch({type: SUCCESS_TIME_BUS, payload: res.data.object});
    } catch (e) {
        dispatch({type: ERROR_TIME_BUS});
        console.error("get by time Error");
    }
};

export const BEGIN_ROUTE_DATA = 'BEGIN_ROUTE_DATA';
export const SUCCESS_ROUTE_DATA = 'SUCCESS_ROUTE_DATA';
export const ERROR_ROUTE_DATA = 'ERROR_ROUTE_DATA';

export const getRouteData = (id) => async dispatch => {
    dispatch({type: BEGIN_ROUTE_DATA});
    try {
        const res = await axios.get(api + getRoute + id);
        dispatch({type: SUCCESS_ROUTE_DATA, payload: res.data});
    } catch (e) {
        dispatch({type: ERROR_ROUTE_DATA});
    }
};

export const BEGIN_SET_ID = 'BEGIN_SET_ID';
export const ERROR_SET_ID = 'ERROR_SET_ID';

export const setRouteId = (id) => async dispatch => {
    if (id != null) {
        dispatch({type: BEGIN_SET_ID, payload: id});
    } else {
        dispatch({type: ERROR_SET_ID, payload: 0});
    }
};
