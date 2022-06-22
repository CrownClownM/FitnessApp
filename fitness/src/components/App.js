import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/404'

//BrowserRouter sirve para incorporar ReactRouter 
//Route hace el render del componente que le especifiquemos
//Switch sirve para renderear el primer hijo con el que haga match la ruta, de lo contrario se dirige al NotFound

const App = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App