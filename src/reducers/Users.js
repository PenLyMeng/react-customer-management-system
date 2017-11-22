/**
 * Created by penlymeng on 11/22/17.
 */

const users = []

export default (state = users,action) =>{
    switch (action.type){
        case 'START_LOGIN':
            console.log(action)
            return users

        default:
            return users
    }
}