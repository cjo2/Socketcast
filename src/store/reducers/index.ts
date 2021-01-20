/**
 * @description Combines reducers
 */

import { combineReducers } from 'redux';
import serversReducer from './serversReducer';

const reducers = combineReducers({
  serversReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;