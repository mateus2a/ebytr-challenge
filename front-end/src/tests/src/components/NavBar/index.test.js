import { screen, render } from '@testing-library/react';
import App from '../../../../App';

describe('Testing <NavBar />', () => {
  it('has a tag <NavBar />', () => {
    render(<App />)
    const navBarComponent = screen.queryByTestId('navbar');
    expect(navBarComponent).toBeDefined();
  });
  it('has a tag <Container />', () => {
    render(<App />)
    const containerComponent = screen.queryByTestId('container');
    expect(containerComponent).toBeDefined();
  });
  it('has a tag <NavBar.Brand />', () => {
    render(<App />)
    const brandComponent = screen.queryByTestId('navbar-brand');
    expect(brandComponent).toBeDefined();
  });
  it('has a tag <NavBar.Toggle />', () => {
    render(<App />)
    const toggleComponent = screen.queryByTestId('navbar-toggle');
    expect(toggleComponent).toBeDefined();
  });
  it('has a tag <NavBar.Collapse />', () => {
    render(<App />)
    const collapseComponent = screen.queryByTestId('navbar-collapse');
    expect(collapseComponent).toBeDefined();
  });
  it('has a tag <Nav />', () => {
    render(<App />)
    const navComponent = screen.queryByTestId('nav');
    expect(navComponent).toBeDefined();
  });
  it('has a tag <Link New />', () => {
    render(<App />)
    const newComponent = screen.queryByTestId('link-new');
    expect(newComponent).toBeDefined();
  });
  it('has a tag <Link List />', () => {
    render(<App />)
    const allComponent = screen.queryByTestId('link-all');
    expect(allComponent).toBeDefined();
  });
});
