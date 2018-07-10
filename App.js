import React, {Component} from 'react';
import Main from './src/Main';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainReducers from './src/reducers/Index'

export default class App extends Component {
  render() {
    const store = createStore(MainReducers)
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
