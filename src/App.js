import logo from './logo.svg';
import './App.css';
import DashBoard from './Components/DashBoard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;



