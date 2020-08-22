import React, { useContext } from 'react';
import { Container, interfaces } from 'inversify';

const InversifyContext = React.createContext<{ container?: Container }>({});

type ProviderProps = {
  container: Container;
  children: React.ReactNode;
};

export function Provider(props: ProviderProps) {
  return <InversifyContext.Provider value={{ container: props.container }}>{props.children}</InversifyContext.Provider>;
}

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}
