import React, { Component } from 'react';
import { 
  ArticleWrapper,
  ArticleHeader
} from './style';

class Detail extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <ArticleWrapper>
        <ArticleHeader>文章id:{this.props.match.params.id}</ArticleHeader>
      </ArticleWrapper>
    )
  }
}

export default Detail;