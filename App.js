//import './App.css';
import Main from './Main';
import Seller from './Seller';
import Financer from './Financer';
import Buyer from './Buyer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
function App()
{
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/seller' element={<Seller />}></Route>
      <Route path='/buyer' element={<Buyer />}></Route>
      <Route path='/financer' element={<Financer />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
