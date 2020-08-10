import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listingReducer, { getInfoAction } from './listingDuck';
import reservationReducer from './reservationDuck';

//COMBINE REDUCERS
const rootReducer = combineReducers({
  listing: listingReducer,
  reservation: reservationReducer,
});

//DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//STORE
export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  //initial data fetch
  getInfoAction('uuid')(store.dispatch);
  return store;
}
