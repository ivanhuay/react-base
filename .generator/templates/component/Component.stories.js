import React from 'react';

import Component from './Component';

export default {
  component: Component,
  title: 'ComponentType/Component',
};

export const Default = () => {
  return <Component title="Component">default</Component>;
};
