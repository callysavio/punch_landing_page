import { createStore, combineReducers } from 'redux';
import coursesReducer from './reducers/coursesReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
});

const store = createStore(rootReducer);

export default store;
