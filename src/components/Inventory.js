export default function Car(props){ 
    return (
        <div className ="card" onClick={() => props.clickHandler(props.car)}>
            <div className="card-body">
                <h2>{ props.car.make }</h2>
                <p><strong>{ props.car.model }</strong></p>     
            </div>
        </div>
    )
}