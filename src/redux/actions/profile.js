import { CONCERN_UPDATE, UPDATE_USER } from './type';
import axios from 'axios'
import { ToastAndroid } from 'react-native';
import { api_route } from '../../utils/route'

export const updateConcerns = (concerns, uid) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ concerns, uid });
    console.log(body); console.log("Update Concerns")
    console.log(`${api_route}api/profile/add-concerns`);
    try {
        const res = await axios.post(`${api_route}api/profile/add-concerns`, body, config);
        console.log(res.data);
        dispatch({ type: CONCERN_UPDATE, payload: res.data });
        ToastAndroid.show('Concerns Updated', ToastAndroid.SHORT);
    } catch (err) {
        ToastAndroid.show('Something Went Wrong!!', ToastAndroid.SHORT);
    }
};

export const updateUser = (name, email, phone_no, gender, concerns, uid) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, phone_no, gender, concerns, uid });
    console.log(`${api_route}api/profile/edit-profile`);
    console.log(body);
    try {
        const res = await axios.post(`${api_route}api/profile/edit-profile`, body, config);
        dispatch({ type: UPDATE_USER, payload: res.data });
        ToastAndroid.show('Successfully Updated the Profile', ToastAndroid.SHORT);
    } catch (err) {
        ToastAndroid.show('Something went Wrong!!', ToastAndroid.SHORT);
    }
}