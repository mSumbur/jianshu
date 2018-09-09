import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper } from '../style';
import { SearchInfoSwitch as WriterSwitch } from '../../../common/header/style';  

class Writer extends Component {

  constructor() {
    super();  
    this.handleChangeWriter = this.handleChangeWriter.bind(this);
  }

  render() {
    console.log(this.props.writerList)
    return (
      <WriterWrapper>
        <div className="header">
          <span>推荐作者</span>
          <WriterSwitch onClick={() => this.handleChangeWriter(this.spin)}>
            <i ref={spin => this.spin = spin} className="iconfont spin">&#xe851;</i>换一批
          </WriterSwitch>
        </div>
        <ul className="writer-list">
        {
          this.props.writerList && this.props.writerList.map((item) => (
            <li className="list-item" key={item.get('id')}>
              <img className="writer-pic" src={item.get('pic')} alt={item.name}/>
              <div className="writer-info">
                <div>{item.get('name')}</div>
                <div className="info-content">{item.get('likes')}喜欢</div>
              </div>
              <div className="follow">+关注</div>
            </li>
          ))
        }
        </ul>
      </WriterWrapper>
    )
  }

  handleChangeWriter(spin) {
    let originAngle = spin.style.transform.replace(/\D/ig, '');
    originAngle = parseInt(originAngle, 10) ? 0 : 360;        
    spin.style.transform = 'rotate(' + originAngle + 'deg)';
  }
}

const mapState = state => ({
  writerList: state.getIn(['home', 'writerList'])
})

export default connect(mapState)(Writer);