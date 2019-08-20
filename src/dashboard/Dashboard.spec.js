// Test away
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
describe('toggleLocked', () => {
  it ('resolve toggle locked', () => {
    const toggleRevolved = null;
    const expected = false;
    Dashboard.toggleLocked().then(res => {
      expect(toggleRevolved).toEqual(expected);
    })
  })
})