import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: unknown;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown) {
    // Keep this minimal: show on-screen + log for dev.
    // eslint-disable-next-line no-console
    console.error('React render error:', error);
  }

  render() {
    if (this.state.hasError) {
      const message =
        this.state.error instanceof Error ? this.state.error.message : String(this.state.error);

      return (
        <div style={{ padding: 16, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
          <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Something crashed while rendering.</h1>
          <p style={{ marginTop: 8, color: '#555' }}>
            Open DevTools Console for the full error. Message: <code>{message}</code>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}


