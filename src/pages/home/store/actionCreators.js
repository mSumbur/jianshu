import * as constants from './constants';
import axios from 'axios';

const setHomeDataAction = data => ({
  type: constants.SET_HOME_DATA,
  data
})

export const setHomeData = () => dispatch => {
  axios('/api/home.json').then((res) => {
    let result = res.data.data;
    console.log(result)
    dispatch(setHomeDataAction(result));
  }).catch(() => {
    console.log('error')
  })
}