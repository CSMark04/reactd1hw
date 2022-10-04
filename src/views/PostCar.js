import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../components/Car';

export default function PostCar() {
    const [car, setCar] = useState({})
    const { id } = useParams()


    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCar(data)
                console.log(data)
            })
    })

    return (
        <div>
            <h1>Car Single: {id}</h1>
            <Car car={car} />
        </div>
    )
}