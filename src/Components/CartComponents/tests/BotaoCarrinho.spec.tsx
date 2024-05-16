
import { render, screen, fireEvent } from '@testing-library/react';
import BotaoCarrinho from '../BotaoCarrinho';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { act } from 'react';


const mockStore = store


describe('BotaoCarrinho component', () => {
 
  test('opens the cart sidebar when the button is clicked', () => {
    
   render(
      <Provider store={mockStore}>
        <BotaoCarrinho />
      </Provider>
    );
    fireEvent.click(screen.getByRole('img'));
    expect(screen.getByTestId('compras')).toBeInTheDocument();
  });

  test('increments the quantity in cart when add button is clicked', () => {
    const { getByText,} = render(
      <Provider store={mockStore}>
        <BotaoCarrinho />
      </Provider>
    );

    expect(getByText('0')).toBeInTheDocument();
    act(()=>{
      store.dispatch({ type: 'cart/addItem', payload: {id:2} })
    }) 
    expect(getByText('1')).toBeInTheDocument();
  });
 


});
