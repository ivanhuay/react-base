import React from 'react';
import { render } from '@testing-library/react';
import BasicAtom from './BasicAtom';

test('Component render', () => {
  const { asFragment } = render(
    <BasicAtom title="example" />,
  );
  expect(asFragment()).toMatchSnapshot();
});
