import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper } from '../style';

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.recommendList && this.props.recommendList.map((item) => (
            <img className="item" key={item.get('id')} src={item.get('imgUrl')} alt={item.get('title')}/> 
          ))
        }        
      </RecommendWrapper>
    )
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapState)(Recommend);