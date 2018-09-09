import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeSearchInfo = (data) => ({
  type: constants.CHANGE_SEARCH_INFO,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocusOrBlur = () => ({
  type: constants.SEARCH_FOCUS_OR_BLUR
})

export const getSearchInfo = () => {
  return (dispatch) => {
    axios('/api/searchInfo.json').then((res) => {
      dispatch(changeSearchInfo(res.data.data))
    }).catch((e) => {
      console.log('error', e)
    })
  }
}

export const mouseIn = () => ({
  type: constants.MOUSE_IN
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})