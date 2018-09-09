import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
  overflow: hidden;
`;
// 首页左侧
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  .banner-img {
    width: 625px;
    height: 270px;
    margin-bottom: 30px;
    border-radius: 10px;
  }
`;
// 首页右侧
export const HomeRight = styled.div`
  float: right;
  width: 240px;
`;
// 专题区
export const TopicWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  .more {
    float: left;
    height: 32px;
    line-height: 32px;
    margin: 0 18px 18px 0;
    color: #787878;
  }
`;
// 专题项
export const TopicItem = styled.a`
  display: block;
  float: left;
  height: 32px;
  line-height: 32px;
  margin: 0 18px 18px 0;
  padding-right: 10px;
  font-size: 14px;
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .pic {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 4px 0 0 4px;
  }
`;
// 文章列表
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    float: right;
    width: 123px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;
// 文章简介
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
// 推荐热门区
export const RecommendWrapper = styled.div`
  width: 100%;
  margin-top: -4px;
  height: 270px;
  .item {
    width: 100%;
    margin-bottom: 12.5px;
  }
`;
// 推荐作者区
export const WriterWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  .header {
    font-size: 14px;
    color: #969696;
  }
  .writer-list {
    margin: 15px 0 0 0;
    list-style-type: none;
  }
  .list-item {
    margin-top: 15px;
    height: 48px;
  }
  .writer-pic {
    float: left;
    width: 48px;
    border-radius: 50%;
  }
  .writer-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    float: left;
    height: 100%;
    margin-left: 10px;
    font-size: 14px;
    .info-content {
      font-size: 12px;
      color: #969696;
    }
  }
  .follow {
    float: right;
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e;
  }
`;