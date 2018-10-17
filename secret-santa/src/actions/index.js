import axios from 'axios';

export const FETCHING_USERS = 'FETCHING_USERS';
export const FETCHED_USERS = 'FETCHED_USERS';
export const ERROR = 'ERROR';
export const ADD_USER = 'ADD_USER';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';

export const gettingUsers = () => {
    const getUsers = axios.get('http://localhost:8002/members/');
    console.log('Request: ', getUsers);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        getUsers.then(response => {
            // console.log('response data: ', response.data)
            dispatch({ type: FETCHED_USERS, payload: response.data })
        })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

export const addingUser = (newUser) => {
    const promise = axios.post('http://localhost:8002/members/', newUser);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => {
            // console.log('response data in adding: ', response.data)
            //   dispatch({ type: ADD_USER, payload: response.data })
            const getUsers = axios.get('http://localhost:8002/members');
            dispatch({ type: FETCHING_USERS });
            getUsers.then(response => {
                // console.log('response data: ', response.data)
                dispatch({ type: FETCHED_USERS, payload: response.data })
            })
                .catch(err => {
                    dispatch({ type: ERROR, payload: err })
                })
        })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

export const deletingUser = (_id) => {
    const promise = axios.delete(`http://localhost:8002/users/${_id}`);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => {
            // console.log('response data in deleting user: ', response.data)
            //   fetch({ type: DELETED, payload: response.data })
            const getUsers = axios.get('http://localhost:8002/users');

            dispatch({ type: FETCHING_USERS });
            getUsers.then(response => {
                // console.log('response data in delete: ', response.data)
                dispatch({ type: FETCHED_USERS, payload: response.data })
            })
                .catch(err => {
                    dispatch({ type: ERROR, payload: err })
                })

        })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}

export const editingUser = (updatedUser) => {
    // console.log('udated user info: ', updatedUser)
    const promise = axios.put(`http://localhost:8000/users/${updatedUser.id}`, updatedUser);
    return dispatch => {
        dispatch({ type: FETCHING_USERS });
        promise.then(response => {
            const getUsers = axios.get('http://localhost:8000/users');

            dispatch({ type: FETCHING_USERS });
            getUsers.then(response => {
                dispatch({ type: FETCHED_USERS, payload: response.data })
            })
                .catch(err => {
                    dispatch({ type: ERROR, payload: err })
                })

        })
            .catch(err => {
                dispatch({ type: ERROR, payload: err })
            })
    }
}