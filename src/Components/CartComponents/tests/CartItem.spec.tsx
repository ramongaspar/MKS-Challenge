import  { ReactNode } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider, useDispatch } from 'react-redux'
import configureStore from 'redux-mock-store'
import  { lessItem, moreItem, removeItem } from '../../../features/cart/cartSlice'
import CartItem from '../CartItem'
import '@testing-library/jest-dom'

const store = configureStore()
const thestore = store({})
const renderWithProviders = (ui:ReactNode) => {
  
  return render(<Provider store={thestore}>{ui}</Provider>)
};

const reactRedux = { useDispatch }

describe('CartItem component', () => {
  const product = {
    id:0,
    name:'name',
    brand:'brand',
    description:'description',
    photo:'photo.jpg',
    price:'100,00',
    createdAt:'string',
    updatedAt:'string'
  }


  const item = { id: 1, text: product, counter: 2 }

  test('renders item information correctly', () => {
    renderWithProviders(<CartItem item={item} />)
    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByText('Qtd:')).toBeInTheDocument()
    expect(screen.getByText(item.counter.toString())).toBeInTheDocument();
    expect(screen.getByText(`R$${(parseInt(product.price) * item.counter).toString()}`)).toBeInTheDocument()
    expect(screen.getByAltText('Product Image')).toHaveAttribute('src', product.photo)
  })

  test('dispatches lessItem action when decrement button is clicked', () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch)
    renderWithProviders(<CartItem item={item} />)
    fireEvent.click(screen.getByTestId('-'))
    expect(thestore.getActions()).toContainEqual(lessItem(item))
  })

  test('dispatches moreItem action when increment button is clicked', () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch)
    renderWithProviders(<CartItem item={item} />)
    fireEvent.click(screen.getByTestId('+'))
    expect(thestore.getActions()).toContainEqual(moreItem(item))
  })

  test('dispatches removeItem action when remove button is clicked', () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);
    renderWithProviders(<CartItem item={item} />)
    fireEvent.click(screen.getByTestId('x'))
    expect(thestore.getActions()).toContainEqual(removeItem(item))
  })

  test('dispatches removeItem action when counter is less than or equal to 1', () => {
    thestore.clearActions()
    const itemWithSingleCounter = { ...item, counter: 1 }
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch)
    renderWithProviders(<CartItem item={itemWithSingleCounter} />)
    fireEvent.click(screen.getByTestId('-'))
    expect(thestore.getActions()).toContainEqual(lessItem(itemWithSingleCounter))
    expect(thestore.getActions()).toContainEqual(removeItem(itemWithSingleCounter))
  })
})
