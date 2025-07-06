import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { setupStore } from '../../app/setupStore';

function renderWithStore() {
  const store = setupStore();
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  return store;
}

describe('Counter', () => {
  test('incrementa el contador', () => {
    renderWithStore();

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText('Contador: 2')).toBeInTheDocument();
  });

  test('incrementa el contador en 5', () => {
    renderWithStore();

    fireEvent.click(screen.getByText('+5'));

    expect(screen.getByText('Contador: 5')).toBeInTheDocument();
  });

  test('decrementa el contador', () => {
    renderWithStore();

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('-1'));

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
  });
});
