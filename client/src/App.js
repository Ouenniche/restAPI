
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AddContact from './pages/AddContact';
import Contacts from './pages/Contacts';
import EditContact from './pages/EditContact';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
<NavBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contacts' element={<Contacts />} />
  <Route path='/addcontact' element={<AddContact />} />
  <Route path='/edit' element={<EditContact />} />
</Routes>
    </div>
  );
}

export default App;
