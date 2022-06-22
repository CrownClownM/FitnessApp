import React from 'react'
import circlesIMG from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

//className forma adecuada de definir una clase css dentro de componentes

const Card = ({title,description,img,leftColor,rightColor}) => (

    <div className="card mx-auto Fitness-Card"
    style={{
        backgroundImage: `url(${circlesIMG}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor|| '#2F80ED'})`
    }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={img || emptyImg} className="right"/>
                </div> 
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

/*
class Card extends React.Component{ //Definiendo un componente
    constructor(props){
        super(props)
        this.state = {
            image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    componentDidMount(){ //Funcion del ciclo de vida para realizar un cambio en el estate a los 5 segundos
        setTimeout(() => {
            this.setState({ //En este caso cambia el state de la imagen a los 5 segundos, cambiando el bulbasaur por el fitnessman
                image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            })
        },5000) //5 segundos
    }

    render(){
        const {title,description,img,leftColor,rightColor} = this.props //Se le entregan las props a las constantes
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesIMG}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor|| '#2F80ED'})`
                }}
                >
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={img || emptyImg} className="right"/>
                            </div> 
                            <div className="col-6 Fitness-Card-Info">
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}
*/

export default Card