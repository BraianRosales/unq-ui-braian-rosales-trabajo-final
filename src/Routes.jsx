import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resultado from './components/Resultado';

const Routes = ({ eleccionJugador, eleccionMaquina }) => {
    return (

        <Router>
                <Route exact path="/"
                    render={props => (
                        <Resultado {...props} jugador={eleccionJugador} maquina={eleccionMaquina} />
                    )}
                />
        </Router>
    );

}
export default Routes;

