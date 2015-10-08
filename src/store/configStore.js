import { createStore } from 'redux';
import qfReducer from '../reducers';

export default function configStore(initialState){
	const store = createStore(qfReducer, initialState);

	if (module.hot) {
		//Enable webpack hot module replacement for reducers
		module.hot.accept('../reducers',() => {
			const nextReducer = require('../reducers');
			store.replaceReducer(nextReducer);
		});
	};

	return store;
}