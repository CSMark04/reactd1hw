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

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Car Inventory</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/inventory">Inventory</Link>
            <Link className="nav-link" to="/profile">profile</Link>
          </div>
        </div>
      </nav>
      <div className="container">
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/car">
          <Route path=":id" element={<PostCar />} /> </Route>
        <Route path="/inventory" element={<CarsAvailable />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
<CarsAvailable />