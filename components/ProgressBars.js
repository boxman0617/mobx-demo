import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyledProgressBarBox, StyledProgressBar, Bars } from './styles';

const InnerBar = observer(({ store, name }) => (
  <StyledProgressBar width={`${store[`${name}Progress`]}%`} />
));

const ProgressBar = ({ store, name }) => (
  <StyledProgressBarBox>
    <InnerBar store={store} name={name} />
  </StyledProgressBarBox>
);

const HoursBar = ({ store }) => <ProgressBar store={store} name="hours" />;
const MinutesBar = ({ store }) => <ProgressBar store={store} name="minutes" />;
const SecondsBar = ({ store }) => <ProgressBar store={store} name="seconds" />;
const MilliBar = ({ store }) => <ProgressBar store={store} name="milli" />;

const ProgressBars = inject('store')(({ store }) => (
  <Bars>
    <div>
      H: <HoursBar store={store} />
    </div>
    <div>
      M: <MinutesBar store={store} />
    </div>
    <div>
      S: <SecondsBar store={store} />
    </div>
    <div>
      MS: <MilliBar store={store} />
    </div>
  </Bars>
));

export default ProgressBars;
