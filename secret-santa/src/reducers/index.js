import { FETCHING_USERS, FETCHED_USERS, ERROR, ADD_USER, DELETED, UPDATED } from '../actions';

const initialState =
{
    users: [],
    loading: false,
    success: false,
    error: null,
}

export const UserReducer = (state = initialState, action) => {
    console.log('action received: ', action)
    switch (action.type) {
        case FETCHING_USERS:
            return Object.assign({}, state, { loading: true })
        case FETCHED_USERS:
            // console.log(' action payload: ', action.payload)
            return Object.assign({}, state, { loading: false, success: true, members: action.payload })
        case ERROR:
            return Object.assign({}, state, { error: action.payload, success: false, loading: false })
        case ADD_USER:
            return Object.assign({}, state, { loading: false, success: true, members: action.payload });
        case DELETED:
            return Object.assign({}, state, { loading: false, success: true, members: action.payload })
        case UPDATED:
            return Object.assign({}, state, { loading: false, success: true, members: action.payload })
        default:
            return state;
    }
}

export default UserReducer;