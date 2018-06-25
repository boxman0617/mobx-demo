import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;
export const StyledListItem = styled.li.attrs({
  style: ({ bg }) => ({ backgroundColor: bg }),
})`
  padding: 5px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`;

const slowList = new Array(500)
  .fill(0)
  .map(() => Math.random() * Math.floor(3000));

export function toColor(num) {
  num >>>= 0;
  const b = num & 0xff,
    g = (num & 0xff00) >>> 8,
    r = (num & 0xff0000) >>> 16;
  return 'rgb(' + [r, g, b].join(',') + ')';
}

export function barfColor(number) {
  const base = Math.floor(Math.random() * Math.floor(number));
  const sign = base > number / 2 ? 1 : -1;
  return toColor(base * 100000 * sign);
}

export default slowList;
