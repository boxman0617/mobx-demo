import React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../stores';
import Other from '../components/Other';

// @Note: This page is dangerous as it updates every millisecond!

export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate, 1); // 1 millisecond;
  }

  render() {
    return (
      <Provider store={this.store}>
        <Other title="Broken ass Jank" />
      </Provider>
    );
  }
}
