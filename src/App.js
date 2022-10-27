
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import { Route, Routes } from 'react-router-dom';
import Update from './views/Update';


function App() {



  return (
    <div className="App">
      
      <Routes>
        <Route path='/api/product' element={<Main />}/>
        <Route path='/api/product/:id' element={<Details />}/>
        <Route path='/api/productu/:id' element={<Update />}/>
      </Routes>

    </div>
  );
}

export default App;
