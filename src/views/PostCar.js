
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../components/Car';
import { DataContext } from '../contexts/DataProvider';

export default function PostCar() {
    const [car, setCar] = useState({})
    const { id } = useParams()
    const { getCar } = useContext(DataContext)


    useEffect(() =>{
        getCar(id, setCar)
    }, [])

    return (
        <div>
            <h1>Car Single: {id}</h1>
            <Car car={car} />
        </div>
    )
}