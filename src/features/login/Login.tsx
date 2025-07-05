import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { login, logout } from './LoginSlice';
import { useLogin } from './useLogin';
import './Login.css';

function Login() {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const { users, error } = useLogin();

  const [userNameInput, setUserNameInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = () => {
    if (!userNameInput.trim()) {
      setLoginError('Introduce un nombre');
      return;
    }

    if (error) {
      setLoginError('No se pudo cargar la lista de usuarios');
      return;
    }

    if (!users.includes(userNameInput.trim())) {
      setLoginError('Usuario no autorizado');
      return;
    }

    dispatch(login(userNameInput.trim()));
    setUserNameInput('');
    setLoginError(null);
  };

  return (
      <div className="login-container">
      {auth.isLoggedIn ? (
        <>
          <p className="login-welcome">Bienvenido, {auth.userName}</p>
          <button className="login-btn logout-btn" onClick={() => dispatch(logout())}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          {error && <p className="login-error">{error}</p>}

          <input
            className="login-input"
            type="text"
            value={userNameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          {loginError && <p className="login-error">{loginError}</p>}
        </>
      )}
    </div>
  );
}

export default Login;
