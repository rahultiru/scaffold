jest.mock('components/NavigationGroups', () => 'LoadableNavigationGroups');
jest.mock('components/GlobalSearchBox', () => 'LoadableGlobalSearchBox');

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import AppNavigation from '.';

describe('AppNavigation', () => {
  let component: ShallowWrapper<{}>;

  beforeEach(() => {
    component = shallow(<AppNavigation />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });

  describe('body content', () => {
    it('renders', () => {});
  });
});
