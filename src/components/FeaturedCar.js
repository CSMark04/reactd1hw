export default function FeaturedCar(props){ 
    return (
        <div className ="card">
            <div className="card-body">
                <h2>{ props.car.make }</h2>
                <p><strong>{ props.car.year }</strong></p>     
                <p><strong>{ props.car.color }</strong></p>     
                <p><strong>${ props.car.price }</strong></p>     
            </div>
        </div>
    )
}