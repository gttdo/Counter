import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers} from 'redux';
// React-redux, Provider connects Redux with React
import {Provider} from 'react-redux';

// Reducer
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

// Combining Reducers
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// Creating Store
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
