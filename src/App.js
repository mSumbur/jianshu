import React, { Component } from 'react';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/article/:id" exact component={Detail}></Route>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
