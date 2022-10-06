import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../contexts/DataProvider'
import Car from './Car'

export default function CarList() {
    const { cars } = useContext(DataContext)



    return (
        <div>
            { cars.map((car) => <Car car={car} preview={true} key={car.id} />) }
        </div>
    )
}