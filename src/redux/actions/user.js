import { SET_USER, UPDATE_USER } from './type';
import { concerns } from '../../data/concerns'
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}