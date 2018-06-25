import { inject, observer } from 'mobx-react';
import { StyledClock, StyledTimeValue } from './styles';

const DEBUG = false;

const Hours = observer(({ store }) => {
  if (DEBUG) console.log('Hours');
  return <StyledTimeValue>{store.hours}</StyledTimeValue>;
});

const Minutes = observer(({ store }) => {
  if (DEBUG) console.log('Minutes');
  return <StyledTimeValue>{store.minutes}</StyledTimeValue>;
});

const Seconds = observer(({ store }) => {
  if (DEBUG) console.log('Seconds');
  return <StyledTimeValue>{store.seconds}</StyledTimeValue>;
});

const MilliOnes = observer(({ store }) => {
  if (DEBUG) console.log('MilliOnes');
  return <StyledTimeValue>{store.milliOnes}</StyledTimeValue>;
});
const MilliTens = observer(({ store }) => {
  if (DEBUG) console.log('MilliTens');
  return <StyledTimeValue>{store.milliTens}</StyledTimeValue>;
});
const MilliHundreds = observer(({ store }) => {
  if (DEBUG) console.log('MilliHundreds');
  return <StyledTimeValue>{store.milliHundreds}</StyledTimeValue>;
});

const Milliseconds = ({ store }) => (
  <StyledTimeValue>
    <MilliHundreds store={store} />
    <MilliTens store={store} />
    <MilliOnes store={store} />
  </StyledTimeValue>
);

const FastClock = inject('store')(
  observer(({ store }) => (
    <StyledClock light={store.light}>
      <Hours store={store} />:
      <Minutes store={store} />:
      <Seconds store={store} />:
      <Milliseconds store={store} />
    </StyledClock>
  ))
);

export default FastClock;
