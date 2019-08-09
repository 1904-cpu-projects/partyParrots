import { LOGIN_USER } from '../actions/user';

export default function ( state = {}, action ){
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user: action.user}
    }
    return state;
};
