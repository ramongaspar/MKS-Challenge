
import { render, screen, fireEvent } from '@testing-library/react'
import CarrinhoCompras from '../CarrinhoCompras'
import '@testing-library/jest-dom'
import { store } from '../../../app/store';
import { Provider } from 'react-redux';


test('renders the sidebar when barStatus is true', () => {
  render(
    <Provider store={store}>
      <CarrinhoCompras closeBar={jest.fn()} barStatus={true} />
    </Provider>
  );
  expect(screen.getByTestId('carrinhoside')).toBeInTheDocument();
});

test('does not render the sidebar when barStatus is false', () => {
  render(
    <Provider store={store}>
      <CarrinhoCompras closeBar={jest.fn()} barStatus={false} />
    </Provider>
  );
  expect(screen.queryByTestId('carrinhoside')).not.toBeInTheDocument();
});


test('calculates total price correctly', () => {
  render(
    <Provider store={store}>
      <CarrinhoCompras closeBar={jest.fn()} barStatus={true} />
    </Provider>
  );
  expect(screen.getByText('R$0')).toBeInTheDocument(); 
});

test('closes the sidebar when the close button is clicked', () => {
  const mockCloseBar = jest.fn();
  render(
    <Provider store={store}>
      <CarrinhoCompras closeBar={mockCloseBar} barStatus={true} />
    </Provider>
  );
  fireEvent.click(screen.getByText('x'));
  expect(mockCloseBar).toHaveBeenCalled();
});