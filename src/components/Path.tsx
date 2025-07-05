import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import Counter from '../features/counter/Counter';
import Login from '../features/login/Login';

function Path() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default Path;