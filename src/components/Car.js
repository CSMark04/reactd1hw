import { Link } from 'react-router-dom'

export default function Car(props){
    return (

        <div className='card'>
            <div className="card-header">
                {
                    (!props.preview) ? 
                    (
                        <h2>{ props.car.name }</h2>
                    )
                    :
                    <Link to={`/car/${props.car.id}`}>{ props.car.name }</Link>
                }
            
            </div>
            {
                (!props.preview) ? 
                (
                    <div className="card-body">
                    <p>{ props.car.year }</p>
                    <p>Price: ${ props.car.price }</p>
                    </div>
                ) 
                : 
                " "
            }
        
            </div>
    )
}