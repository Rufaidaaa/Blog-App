import Reducer1 from './reducer1'
import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';
import { combineReducers } from 'redux';
import PostReducer from './postReducer'


const rootReducer = combineReducers({
  reducer1: Reducer1,
  auth_reducer: AuthReducer,
  user_reducer: UserReducer,
  post_reducer: PostReducer
})

export default rootReducer;
