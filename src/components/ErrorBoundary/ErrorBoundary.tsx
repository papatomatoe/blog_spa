/* eslint-disable prettier/prettier */
import { Component, ErrorInfo, ReactNode } from 'react';
import { Props, State } from './types';

class ErrorBoundary extends Component<Props, State> {
  public state = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
