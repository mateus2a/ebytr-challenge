import { screen, render } from '@testing-library/react';
import App from '../../App';

describe('Testing <App />', () => {
  it('is rendering <App />', () => {
    render(<App />);
  });
  it('has a component <BrowserRouter />', () => {
    render(<App />);
    const browserRouterComponent = screen.queryByTestId('browser-router');
    expect(browserRouterComponent).toBeDefined();
  });
  it('has a component <Switch />', () => {
    render(<App />);
    const switchComponent = screen.queryByTestId('switch');
    expect(switchComponent).toBeDefined();
  });
  it('has a component <Router /all />', () => {
    render(<App />);
    const routerComponent = screen.queryByTestId('route-all');
    expect(routerComponent).toBeDefined();
  });
  it('has a component <Router /add />', () => {
    render(<App />);
    const routerComponent = screen.queryByTestId('route-add');
    expect(routerComponent).toBeDefined();
  });
  it('has a component <Router /edit />', () => {
    render(<App />);
    const routerComponent = screen.queryByTestId('route-edit');
    expect(routerComponent).toBeDefined();
  });
  it('has a component <Router />', () => {
    render(<App />);
    const routerComponent = screen.queryByTestId('route-default');
    expect(routerComponent).toBeDefined();
  });
});