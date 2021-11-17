import React from 'react';
import { render } from '@testing-library/react';
import SecondMolecule from './SecondMolecule';

test('SecondMolecule render', () => {
  const { asFragment } = render(
    <SecondMolecule title="example" />,
  );
  expect(asFragment()).toMatchSnapshot();
});
