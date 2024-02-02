
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';

import Produc from './Produc';
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/product/:id" element={ <Produc/> } />       
    </Routes>
  );
}
export default App;
