import {combineReducers} from 'redux'
import peopleReducer from './people/peopleReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
    people: peopleReducer,
    user: userReducer
  })
  
export default rootReducer