import React from 'react';
import { render } from '@testing-library/react';
import BasicMolecule from './BasicMolecule';

test('BasicMolecule render', () => {
  const { asFragment } = render(
    <BasicMolecule title="example" />,
  );
  expect(asFragment()).toMatchSnapshot();
});
