import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resultado from './components/Resultado';

const Routes = ({ eleccionJugador, eleccionMaquina }) => {
    return (

        <Router>
            <Switch>
                <Route exact path="/"
                    render={props => (
                        <Resultado {...props} jugador={eleccionJugador} maquina={eleccionMaquina} />
                    )}
                />
            </Switch>
        </Router>
    );

}
export default Routes;

