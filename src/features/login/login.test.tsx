import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { Provider } from 'react-redux';
import { setupStore } from '../../app/setupStore';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Login', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: { users: ['sergio', 'ana'] } });
  });

  test('hace login con un nombre autorizado', async () => {
    const store = setupStore();

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    // Espera a que el fetch de usuarios termine
    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalled());

    fireEvent.change(screen.getByPlaceholderText(/ingresa tu nombre/i), {
      target: { value: 'sergio' },
    });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(screen.getByText(/bienvenido, sergio/i)).toBeInTheDocument();
    });
  });

  test('muestra error si el usuario no está autorizado', async () => {
    const store = setupStore();

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalled());

    fireEvent.change(screen.getByPlaceholderText(/ingresa tu nombre/i), {
      target: { value: 'pepito' },
    });

    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(screen.getByText(/usuario no autorizado/i)).toBeInTheDocument();
    });
  });

  test('hace logout correctamente', async () => {
    const store = setupStore();

    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalled());

    // Login válido
    fireEvent.change(screen.getByPlaceholderText(/ingresa tu nombre/i), {
      target: { value: 'sergio' },
    });
    fireEvent.click(screen.getByText(/login/i));

    await waitFor(() => {
      expect(screen.getByText(/bienvenido, sergio/i)).toBeInTheDocument();
    });

    // Logout
    fireEvent.click(screen.getByText(/cerrar sesión/i));

    expect(screen.getByPlaceholderText(/ingresa tu nombre/i)).toBeInTheDocument();
  });
});
