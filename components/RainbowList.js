import slowList, { barfColor, StyledList, StyledListItem } from '../lib/slow';

const RainbowList = () => (
  <StyledList>
    {slowList.map(item => (
      <StyledListItem bg={barfColor(item)} key={item}>
        woah
      </StyledListItem>
    ))}
  </StyledList>
);

export default RainbowList;
