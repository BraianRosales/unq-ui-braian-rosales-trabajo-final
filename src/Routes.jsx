import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resultado from './components/Resultado';
import Marcador from './components/Marcador';

const Routes = ({ eleccionJugador, eleccionMaquina }) => {
    return (

        <Router>
            <Switch>
                <Route exact path="/"
                    render={props => (
                        <Resultado {...props} jugador={eleccionJugador} maquina={eleccionMaquina} />
                    )}
                />
                <Route exact path="/marcador"
                    component={Marcador}
                />
            </Switch>
        </Router>
    );

}
export default Routes;

