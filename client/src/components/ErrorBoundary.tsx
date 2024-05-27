import React, { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (this.props as { children: ReactNode }).children;
  }
}

export default ErrorBoundary;
