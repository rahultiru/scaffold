jest.mock('./loadableComponents', () => ({
  Home: jest.fn(),
  Inbox: jest.fn(),
  Notifications: jest.fn(),
}));

import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Routes from './Routes';

describe('Routes', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Routes />);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});
