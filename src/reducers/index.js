/**
 * Created by l.pen on 11/22/2017.
 */
import {combineReducers} from 'redux'
import UserReducer from './Users'



const reducers = combineReducers({
    users:UserReducer
})

export default reducers