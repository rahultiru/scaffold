import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import AppMain from '.';

describe('AppMain', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<AppMain>foo</AppMain>);
  });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});
