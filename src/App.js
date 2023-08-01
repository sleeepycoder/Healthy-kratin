import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Navbar from  './components/Navbar/Navbar'

import Pages from './Pages/Pages';
function App() {
  return (
<BrowserRouter>
<Navbar/>
<Pages/>


</BrowserRouter>
  );
}

export default App;
