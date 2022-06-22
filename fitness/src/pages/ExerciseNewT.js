import React from 'react'
import '../components/styles/ExerciseNew.css'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import FatalError from './500'

class ExerciseNew extends React.Component {

    state = {
        form: {title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor : ''
        },
        loading: false,
        error: null

    }
    
    handleChange = e => { //Recibe el evento que estamos generando en los campos de abajo

        this.setState({
            form: {
                ...this.state.form, //Mantiene lo que a tenia anteriormente a menos que se cambie el valor en el campo
                [e.target.name]: e.target.value //El estado cambia con respecto al valor que corresponda el campo
            }
        })
    }

    handleSubmit = async e => { //Recibe el evento que vamos a enviar a nuestra API
        e.preventDefault() //Dejamos de recargar la pagina al realizar un submit
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()

            this.setState({
                loading: false
            })

            this.props.history.push('/exercise')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
        console.log(this.state)
    }

    render(){
        if(this.state.error)
            return <FatalError/>
        return (
            <div className="row">  
                <div className="col-sm">
                    <Card
                        {...this.state.form}
                    />
                </div>
                <div className="col-sm">
                    <ExerciseForm //Enviamos los props 
                        onChange = {this.handleChange}
                        onSubmit = {this.handleSubmit}
                        form = {this.state.form}//Inicializamos el state
                    />
                </div>
            </div>
            
        )
    }
}

export default ExerciseNew