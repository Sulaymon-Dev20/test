import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import {rootReducer} from './redux/RootReducer';

const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store
