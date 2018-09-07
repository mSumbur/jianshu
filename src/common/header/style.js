import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.a.attrs({ href: '/' })`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 58px;  
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`

export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
  width: 160px;
  height: 38px;
  margin: 10px 0 0 20px;
  padding: 0 35px 0 20px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-radius: 19px;
  color: #777;
  background: #eee;
  font-size: 14px;
  transition: width 0.5s ease-out;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
    transition: 0.5s ease-out;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin: 0 10px 10px 0;
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-raius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0; 
  right: 0;
  height: 58px;
`;

export const Button = styled.div`
  float: right;
  margin: 10px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    .iconfont {
      margin-right: 5px;
    }
  }
  $::before {
    content: "\e601";
  }
`;