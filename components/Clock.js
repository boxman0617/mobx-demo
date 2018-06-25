import { StyledClock } from './styles';

export default props => {
  return (
    <StyledClock light={props.light}>
      {format(new Date(props.lastUpdate))}
    </StyledClock>
  );
};

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = n => (n < 10 ? `0${n}` : n);
