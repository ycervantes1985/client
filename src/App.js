
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/api/product' element={<Main />}/>
        <Route path='/api/product/:id' element={<Details/>}/>
      </Routes>

    </div>
  );
}

export default App;
