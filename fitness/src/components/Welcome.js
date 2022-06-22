import React from 'react'
import './styles/Welcome.css'

const Welcome = ({username}) => ( //Adecuado para los modelos funcionales
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}!</h1>
            <p>Vamos a comer veneca</p>
        </div>
    </div>
)

/*
function Welcome(props){ //Componentes funcionales son aquellos que no necesitan state o utilizar un ciclo de vida
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Vamos a comer veneca</p>
            </div>
        </div>
    )
}
*/

export default Welcome