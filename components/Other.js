import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import SlowClock from './SlowClock';
import {
  PageHeader,
  HeaderTitle,
  HeaderLinks,
  LinkBox,
  StyledLink,
  LeftPanel,
  FloatingPanel,
} from './styles';
import RainbowList from './RainbowList';

@inject('store')
@observer
class Other extends React.Component {
  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  render() {
    return (
      <div>
        <PageHeader>
          <HeaderTitle>{this.props.title}</HeaderTitle>
          <HeaderLinks>
            <LinkBox>
              <Link href="/">
                <StyledLink>GO BACK!</StyledLink>
              </Link>
              <Link href="/demo">
                <StyledLink>GO FORWARD!</StyledLink>
              </Link>
            </LinkBox>
          </HeaderLinks>
        </PageHeader>
        <div style={{ display: 'flex' }}>
          <LeftPanel>
            <FloatingPanel>
              <SlowClock
                lastUpdate={this.props.store.lastUpdate}
                light={this.props.store.light}
              />
            </FloatingPanel>
          </LeftPanel>
          <div style={{ flex: '1' }}>
            <RainbowList />
          </div>
        </div>
      </div>
    );
  }
}

export default Other;
