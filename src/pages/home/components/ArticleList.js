import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo } from '../style';

class ArticleList extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.articleList && this.props.articleList.map((item) => {
            return (
              <Link to={'/article/' + item.get('id')} key={item.get('id')}>
                <ListItem>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('content')}</p>
                  </ListInfo>
                  <img className="pic" src={item.get('imgUrl')} alt="pic" />
                </ListItem>
              </Link>
            )
          })
        }
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapState)(ArticleList);