import React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../stores';
import Demo from '../components/Demo';

export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate, 1);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Demo title="Happy Place" />
      </Provider>
    );
  }
}
