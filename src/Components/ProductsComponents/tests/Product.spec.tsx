import { render, fireEvent } from '@testing-library/react';
import Product from '../Product';
import { Provider, useDispatch, useSelector,} from 'react-redux';
import { addItem } from '../../../features/cart/cartSlice';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'




const reactRedux = { useDispatch, useSelector }
const mockDispatch = jest.fn();
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');


const mockStore = configureStore([]);

describe('Product component', () => {
  const product = {
    id:0,
    name:'name',
    brand:'brand',
    description:'description',
    photo:'photo.jpg',
    price:'100,00',
    createdAt:'string',
    updatedAt:'string'
  };

  test('renders product information correctly', () => {
    const { getByText, getByAltText } = render(
      <Provider store={mockStore({})}>
        <Product product={product} />
      </Provider>
    );
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(`R$${product.price.slice(0, product.price.length - 3)}`)).toBeInTheDocument();
    expect(getByAltText('Product Photo')).toHaveAttribute('src', product.photo);
    expect(getByText('Comprar')).toBeInTheDocument();
  });

  test('dispatches addItem action when buy button is clicked', () => {
    const store = mockStore({});
    const expectedAction = addItem(product);
    useDispatchMock.mockReturnValue(mockDispatch);
    
    const { getByText } = render(
      <Provider store={store}>
        <Product product={product} />
      </Provider>
    );

    fireEvent.click(getByText('Comprar'));
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});
