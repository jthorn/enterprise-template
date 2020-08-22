import React from 'react';
import IProvider, { useInjection } from '@enterprise/plugins/src';

export const Hello: React.FC = () => {
  const provider = useInjection<IProvider<string>>('nameProvider');

  return <h1>Hello {provider.provide()}!</h1>;
};
