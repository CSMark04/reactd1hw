import ProfileView from './views/Profile';
import HomeView from './views/Home';
import './App.css';
import CarsAvailable from './views/Inventory';
import PostCar from './views/PostCar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/car">
          <Route path=":id" element={<PostCar />} /> </Route>
        <Route path="/inventory" element={<CarsAvailable />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
<CarsAvailable />