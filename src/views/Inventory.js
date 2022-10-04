import Car from '../components/Inventory'
import FeaturedCar from '../components/FeaturedCar'
import { useState } from 'react';

function CarsAvailable() {
  const [Cars, setCars] = useState([
    {
        "id": 1,
        "make": "Toyota",
        "model": "Camry",
        "color": "Black",
        "price": 8000,
        "year": 2013
    },
    {
        "id": 2,
        "make": "Toyota",
        "model": "Camry",
        "color": "Black",
        "price": 8100,
        "year": 2013
    },
    {
        "id": 3,
        "make": "Toyota",
        "model": "Camry",
        "color": "Black",
        "price": 80200,
        "year": 2013
    },
    {
        "id": 4,
        "make": "Toyota",
        "model": "Camry",
        "color": "Black",
        "price": 80300,
        "year": 2013
    },
    {
        "id": 5,
        "make": "Toyota",
        "model": "Camry",
        "color": "Black",
        "price": 80400,
        "year": 2013
    },
    {
        "id": 6,
        "make": "Toyota",
        "model": "Camry",
        "color": "Black",
        "price": 80050,
        "year": 2013
    },
  ])

  const [featuredCar, setFeaturedCar] = useState(Cars[0])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Featured Car</h2>
        <FeaturedCar car={featuredCar} />
        <hr />
        { Cars.map((car) => <Car clickHandler={setFeaturedCar} key={car.id} car={car} />) }
      </header>
    </div>
  );
}

export default CarsAvailable;