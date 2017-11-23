/**
 * Created by penlymeng on 11/22/17.
 */

const user = false

export default function(state = user,action){
    switch (action.type){
        case 'START_LOGIN':
            return action.payload
        case 'START_LOGOUT':
            return action.payload
        case 'START_SIGN_UP':
            return action.payload

        default:
            return state
    }
}