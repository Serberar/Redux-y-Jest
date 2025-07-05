import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { setupStore } from '../../app/setupStore';

describe('Counter', () => {
  test('incrementa el contador', () => {
    const store = setupStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText('Contador: 2')).toBeInTheDocument();
  });
});
