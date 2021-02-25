import {
    BEGIN_ROUTE_PROPS,
    SUCCESS_ROUTE_PROPS,
    ERROR_ROUTE_PROPS,

    BEGIN_ROUTE_STATIONS,
    SUCCESS_ROUTE_STATIONS,
    ERROR_ROUTE_STATIONS,

    BEGIN_TIME_BUS,
    SUCCESS_TIME_BUS,
    ERROR_TIME_BUS,

    BEGIN_ROUTE_DATA,
    SUCCESS_ROUTE_DATA,
    ERROR_ROUTE_DATA,

    BEGIN_SET_ID,
    ERROR_SET_ID,
} from './ApiMobileV2Action'

const initialState = {
    routePropsLoading: false,
    routePropsData: [],
    routePropsStatus: "",
    routePropsError: false,
    routeId: 0,

    routeStationsLoading: false,
    routeStationsData: [],
    kpp1: [],
    kpp2: [],
    routeStationsError: false,

    timeBusLoading: false,
    timeBusData: [],
    timeBusStationInfo: [],
    timeBusError: false,

    radiusLoading: false,
    radiusData: [],
    radiusStationInfo: [],
    radiusError: false,

    routeDataLoading: false,
    routeData: [],
    routeMessage: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_ROUTE_PROPS:
            return {
                ...state,
                routePropsLoading: true
            };
        case SUCCESS_ROUTE_PROPS:
            return {
                ...state,
                routePropsLoading: false,
                routePropsData: action.payload.data,
                routePropsStatus: action.payload.status.code
            }
        case ERROR_ROUTE_PROPS:
            return {
                ...state,
                routePropsError: true
            }

        case BEGIN_ROUTE_STATIONS:
            return {
                ...state,
                routeStationsLoading: true
            };
        case SUCCESS_ROUTE_STATIONS:
            return {
                ...state,
                routeStationsLoading: false,
                routeStationsData: action.payload,
                kpp1: action.payload.kpp1,
                kpp2: action.payload.kpp2
            }
        case ERROR_ROUTE_STATIONS:
            return {
                ...state,
                routeStationsError: true
            }

        case BEGIN_TIME_BUS:
            return {
                ...state,
                timeBusLoading: true
            };
        case SUCCESS_TIME_BUS:
            return {
                ...state,
                timeBusLoading: false,
                timeBusData: action.payload.response,
                timeBusStationInfo: action.payload.stationInfo
            }
        case ERROR_TIME_BUS:
            return {
                ...state,
                timeBusError: true
            };

        case BEGIN_ROUTE_DATA:
            return {
                ...state,
                timeBusLoading: true
            };
        case SUCCESS_ROUTE_DATA:
            return {
                ...state,
                timeBusLoading: false,
                timeBusData: action.payload.object,
                timeBusStationInfo: action.payload.success
            }
        case ERROR_ROUTE_DATA:
            return {
                ...state,
                timeBusError: true
            };

        case BEGIN_SET_ID:
            return {
                ...state,
                routeId: action.payload
            };
        case ERROR_SET_ID:
            return {
                ...state,
                routeId: action.payload
            };

        default:
            return state
    }
}
