import React from 'react'
import Card from '../components/Card'

const ExerciseList = ({exercises}) => (
    <>
        {exercises.map((exercise) =>{ //Crea un nuevo array con cada uno de los elementos que opera
                return( 
                    <Card 
                    key={exercise.id}
                    {...exercise} //Le pasamos todos los atributos que tenga exercise
                    /*
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                    */
                    /> // props de cada elemento del array para cada componente 
                )
            })}  
    </>
)

export default ExerciseList