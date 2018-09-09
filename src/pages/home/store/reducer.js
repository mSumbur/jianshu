import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SET_TOPIS_LIST: 
      return state.set('topicList', action.data);
    case constants.SET_ARTICLE_LIST:
      return state.set('articleList', action.data);  
    case constants.SET_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    case constants.SET_WRITER_LIST:
      return state.set('writerList', action.data);
    case constants.SET_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.data.topicList),
        'articleList': fromJS(action.data.articleList),
        'recommendList': fromJS(action.data.recommendList),
        'writerList': fromJS(action.data.writerList)
      })
    default:
      return state;
  }
}