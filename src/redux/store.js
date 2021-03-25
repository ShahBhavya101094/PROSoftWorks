// import { createStore, applyMiddleware, compose } from 'redux';

// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

// let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;

// const configureStore = () => {
//     const store = createStore(
//         rootReducer,
//         composeEnhancer(applyMiddleware(thunk)
//         )
//     )
//     return store;
// }

// export default configureStore;


import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
        //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}

export default configureStore;