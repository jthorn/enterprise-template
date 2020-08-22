import React from 'react';
import { logError } from './logErrorService';
import './ErrorBoundary.css';

interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor() {
    super({});
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error: Error, info: any) {
    // You can also log the error to an error reporting service
    logError(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>App Crashed</h2>
            <p>Something has went horribly wrong.</p>
            {this.state.error}
          </div>
        </div>
      );
    }

    // If there is no error just render the children component.
    return this.props.children;
  }
}
