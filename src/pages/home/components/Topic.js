import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList && this.props.topicList.map((item) => (
            <TopicItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt="pic" />
              <span className="value">{item.get('title')}</span>
            </TopicItem>
          ))
        }
        <div className="more">更多热门专题 ></div>
      </TopicWrapper>
    )
  }
}

const mapState = state => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState)(Topic);