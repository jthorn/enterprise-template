import React, { useContext } from 'react';
import { Container, interfaces } from 'inversify';

const InversifyContext = React.createContext<Container | undefined>(undefined);

type ProviderProps = {
  container: Container;
  children?: React.ReactNode;
};

export function IOCProvider(props: ProviderProps) {
  return <InversifyContext.Provider value={props.container}>{props.children}</InversifyContext.Provider>;
}

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const container = useContext(InversifyContext);
  if (!container) {
    throw new Error('Undefined Container in IOCProvider Context');
  }
  return container.get<T>(identifier);
}
