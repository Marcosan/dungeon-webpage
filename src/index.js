import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store/store';
import { Provider as ReduxProvider } from 'react-redux';

// redux-saga
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducers';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const storeSaga = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type) => storeSaga.dispatch({ type });

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
	root.render(
		<React.StrictMode>
			<ReduxProvider store={store}>
				<BrowserRouter>
					<App value={storeSaga.getState()}
					onIncrement={() => {
						action('INCREMENT');
					}}
					onDecrement={() => action('DECREMENT')}
					onIncrementAsync={() => action('INCREMENT_ASYNC')}/>
				</BrowserRouter>
			</ReduxProvider>
		</React.StrictMode>
	);
}
render();
storeSaga.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
