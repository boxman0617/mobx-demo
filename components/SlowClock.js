import { StyledClock } from './styles';

export default props => {
  return (
    <StyledClock light={props.light}>
      {format(new Date(props.lastUpdate))}
    </StyledClock>
  );
};

const pad = (n, p = 2) => n.toString().padStart(p, '0');

const format = t =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
    t.getUTCSeconds()
  )}:${pad(t.getUTCMilliseconds(), 3)}`;
