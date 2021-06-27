import {CONCERN_UPDATE,UPDATE_QUOTE_OF_THE_DAY} from './type'
import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {api_route} from '../../utils/route';

export const fetchQuoteOfTheDay=()=>async dispatch=>{
    try{
        const res=await axios.get(`${api_route}api/quotes/`);
        console.log('fecthing quote');
        dispatch({
            type:UPDATE_QUOTE_OF_THE_DAY,
            paylod:res.data
        });
        ToastAndroid.show(`${res.data.quote}`,ToastAndroid.SHORT);
    }catch(err){
        ToastAndroid.show('Something went Wrong',ToastAndroid.SHORT);
    }
};