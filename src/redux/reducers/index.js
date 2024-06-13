import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import stepsReducer from './stepsReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  steps: stepsReducer,
});

export default rootReducer;
