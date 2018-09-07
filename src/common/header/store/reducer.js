import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  searchInfo: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS_OR_BLUR:
      return state.set('focused', !state.get('focused'));
    case constants.CHANGE_SEARCH_INFO:
      return state.merge({
        searchInfo: action.data,
        totalPage: action.totalPage
      })
      // state.set('searchInfo', action.data).set('totalPage', action.totalPage);
    case constants.MOUSE_IN: 
      return state.set('mouseIn', !state.get('mouseIn'));
    case constants.CHANGE_PAGE:
      // let temp = state.get('page') < state.get('totalPage') ? state.get('page') + 1 : 1;
      return state.set('page', action.page);
    default:
      return state;
  }
}