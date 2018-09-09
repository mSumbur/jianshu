import React, { Component } from 'react';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import Topic from './components/Topic';
import ArticleList from './components/ArticleList';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="/api/banner.jpg" alt="banner"/>
          <Topic />
          <ArticleList />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer writerList={this.props.writerList}/> 
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.setHomeData();
  }
}

const mapDispatch = dispatch => ({
  setHomeData() {
    dispatch(actionCreators.setHomeData());
  }
})

export default connect(null, mapDispatch)(Home);