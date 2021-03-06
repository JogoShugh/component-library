import { createComponent, styleUtils } from '../StyleProvider';

export default createComponent(
  ({ focused, theme }) => ({
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: focused ? theme.TextField.focused.main : '#474c54',
    borderRadius: '4px 0 0 4px',
    color: '#fff',
    display: 'inline-flex',
    lineHeight: 1,
    padding: '3px 6px',
  }),
  'div',
);
