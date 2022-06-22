import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

class Exercises extends React.Component{ //Listado de componentes

    state = { //Igual a un objeto
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try{
            let res = await fetch('http://localhost:8000/api/exercises') //Obtiene el array de la API
            let data = await res.json() //Convierte lo recibido en json
    
            this.setState({ //Actualiza el estado con el json
                data,
                loading: false
            })
        } catch(error){
            this.setState({ //Actualiza el estado con el json
                loading: false,
                error
            })
        }
    }

    render(){
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>
        return(
            <React.Fragment>
                <Welcome
                    username="Medina"
                />
                <ExerciseList
                    exercises={this.state.data} 
                /> {/* Llamado al componente funcional que retorna la lista de los componentes Card */}
                <AddButton/>
            </React.Fragment>
        )
    }
}

export default Exercises //Definimos el exportado de esa clase en especifico