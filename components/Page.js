import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import {
  PageHeader,
  HeaderLinks,
  HeaderTitle,
  LinkBox,
  StyledLink,
} from './styles';
import Clock from './Clock';

@inject('store')
@observer
class Page extends React.Component {
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
              <Link href="/other">
                <StyledLink>Take me to the jank</StyledLink>
              </Link>
            </LinkBox>
          </HeaderLinks>
        </PageHeader>
        <Clock
          lastUpdate={this.props.store.lastUpdate} // Date.now()
          light={this.props.store.light}
        />
      </div>
    );
  }
}

export default Page;
