import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import {
  PageHeader,
  HeaderLinks,
  HeaderTitle,
  StyledLink,
  LinkBox,
  LeftPanel,
  FloatingPanel,
} from './styles';
import ProgressBars from './ProgressBars';
import RainbowList from './RainbowList';
import FastClock from './FastClock';

@inject('store')
class Page extends React.Component {
  state = {
    progress: false,
    list: false,
  };

  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  toggleProgress = () =>
    this.setState(({ progress }) => ({ progress: !progress }));

  toggleList = () => this.setState(({ list }) => ({ list: !list }));

  render() {
    const { progress, list } = this.state;

    return (
      <div>
        <PageHeader>
          <HeaderTitle>{this.props.title}</HeaderTitle>
          <HeaderLinks>
            <LinkBox>
              <Link href="/">
                <StyledLink>To beginning</StyledLink>
              </Link>
              <Link href="/other">
                <StyledLink>To scary places</StyledLink>
              </Link>
            </LinkBox>
            <LinkBox>
              <button onClick={this.toggleProgress} type="button">
                Toggle Progress
              </button>
              <button onClick={this.toggleList} type="button">
                Toggle List
              </button>
            </LinkBox>
          </HeaderLinks>
        </PageHeader>
        <div style={{ display: 'flex' }}>
          <LeftPanel>
            <FloatingPanel>
              <FastClock />
              {progress && <ProgressBars />}
            </FloatingPanel>
          </LeftPanel>
          {list && (
            <div style={{ flex: '1' }}>
              <RainbowList />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Page;
