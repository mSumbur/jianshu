import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    const { focused, searchInfo, handleInputFocusOrBlur } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocusOrBlur(searchInfo)}
              onBlur={handleInputFocusOrBlur}
            ></NavSearch>
            <i className={focused ? 'focused iconfont search-icon' : 'iconfont search-icon'}>&#xe614;</i>
            {this.getSearchInfo()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe601;</i>
            写文章
        </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getSearchInfo() {
    const { focused, searchInfo, page, totalPage, mouseIn, handleOnMouseIn, handleChangeInfo } = this.props;
    const infoList = searchInfo.toJS();
    const showList = [];

    if (!focused && !mouseIn) return;

    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (infoList[i]) {
        showList.push(<SearchInfoItem key={infoList[i]}>{infoList[i]}</SearchInfoItem>)
      }
    }
    return (
      <SearchInfo onMouseEnter={handleOnMouseIn} onMouseLeave={handleOnMouseIn}>
        <SearchInfoTitle>
          热门搜索
                <SearchInfoSwitch onClick={() => handleChangeInfo(page, totalPage, this.spin)}>
                <i ref={spin => this.spin = spin} className="iconfont spin">&#xe851;</i>换一批
                </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>{showList}</div>
      </SearchInfo>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchInfo: state.getIn(['header', 'searchInfo']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocusOrBlur(searchInfo) {
      searchInfo.size === 0 && dispatch(actionCreators.getSearchInfo())
      dispatch(actionCreators.searchFocusOrBlur());
    },
    handleOnMouseIn() {
      dispatch(actionCreators.mouseIn());
    },
    handleChangeInfo(page, totalPage, spin) {
      // 换一批动画效果
      let originAngle = spin.style.transform.replace(/\D/ig, '');
      originAngle = parseInt(originAngle, 10) ? 0 : 360;        
      spin.style.transform = 'rotate(' + originAngle + 'deg)';

      let temp = page < totalPage ? page + 1 : 1;
      dispatch(actionCreators.changePage(temp));
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);