import axios from 'axios';

export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHED_USERS = 'FETCHED_USERS';
export const ERROR = 'ERROR';
export const ADD_USER = 'ADD_USER';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';

export const gettingUsers = () => {
    const promise = axios.get('http://localhost:7000/members');
    console.log('Request: ', promise);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => {
            dispatch({ type: FETCHED_USERS, payload: response.data })
        })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

export const addingUser = (newUser) => {
    const promise = axios.post('http://localhost:7000/members', newUser);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise
            .then(response => {
                dispatch({ type: ADD_USER, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

export const deletingUser = (id) => {
    const promise = axios.delete(`http://localhost:7000/members/${id}`);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => {
            dispatch({ type: DELETED });
        })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

// export const editingUser = (updatedUser) => {
//     // console.log('udated user info: ', updatedUser)
//     const promise = axios.put(`http://localhost:7000/members/${updatedUser.id}`, updatedUser);
//     return dispatch => {
//         dispatch({ type: FETCHING_USERS });
//         promise.then(response => {
//             const getUsers = axios.get('http://localhost:8000/users');

//             dispatch({ type: FETCHING_USERS });
//             getUsers.then(response => {
//                 dispatch({ type: FETCHED_USERS, payload: response.data })
//             })
//                 .catch(err => {
//                     dispatch({ type: ERROR, payload: err })
//                 })

//         })
//             .catch(err => {
//                 dispatch({ type: ERROR, payload: err })
//             })
//     }
// }