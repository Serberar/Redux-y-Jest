import { BrowserRouter } from 'react-router-dom';
import Path from './components/Path';
import Nav from './components/nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Path />
    </BrowserRouter>
  );
}

export default App;
