import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

//미들뒈어가 여러개 일 때는 파라미터로 전달하면 됩니다. 예)applyMiddleware(a,b,c)
//미들웨어 순서는 여기에서 정달한 파라미터 순서대로 지정합니다.

const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, ReduxThunk))

export default store;