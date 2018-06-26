import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)

export default class TodoRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
