import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './Hello';
import { container } from './ioc.container';
import { IOCProvider } from '@enterprise/plugins/src';
import ErrorBoundary from '@enterprise/common/src';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <IOCProvider container={container}>
        <div>
          <Hello />
        </div>
      </IOCProvider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
