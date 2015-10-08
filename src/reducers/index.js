import { combineReducers } from 'redux';
import login from './login';

const qfReducer = combineReducers({
	login,
});

export default qfReducer;