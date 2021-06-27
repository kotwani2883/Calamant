import { SET_USER, UPDATE_USER } from '../actions/type';
import { concerns } from '../../data/concerns';
const initialState = {
    uid: "xxxxxxxxxxxxxxxx",
    name: "Palak Kotwani",
    email: "pgk@gmail.com",
    bio: "",
    gender: "female",
    age: "18",
    phone_no: "123456789",
    concerns: concerns
}

export const userReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload }

        case UPDATE_USER:
            return { ...state, ...action.payload }

        default:
            return state
    }
}