import React, { useState } from 'react';
import './App.css';
import './components/Opcion';
import './components/Resultado';
import Eleccion from './components/Eleccion';
import Opcion from './components/Opcion';
import Routes from './Routes';

function App() {

    const [eleccionJugador, setEleccionJugador] = useState({});
    const [eleccionMaquina, setEleccionMaquina] = useState({});
    

    const opciones = [
        {
            eleccion: "piedra",
            derrota: "lagarto",
            tambienDerrota: "tijera",
        },
        {
            eleccion: "papel",
            derrota: "piedra",
            tambienDerrota: "spock",
        },
        {
            eleccion: "tijera",
            derrota: "papel",
            tambienDerrota: "lagarto",
        },
        {
            eleccion: "lagarto",
            derrota: "spock",
            tambienDerrota: "papel",
        },
        {
            eleccion: "spock",
            derrota: "piedra",
            tambienDerrota: "tijera",
        }
    ]

    const elegirOpcion = (event) => {
        const jugador = opciones.find(e => e.eleccion === event.target.textContent);
        setEleccionJugador(jugador);
        eleccionRival();
    }

    const eleccionRival = () => {
        const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
        setEleccionMaquina(eleccion);
    }


    return (
        <div className="App">

            <header>
                <h1>Piedra, papel, tijera, lagarto, spock</h1>
            </header>

            <body>
                <div className="comienzo">
                    <p>
                        elija su opcion de juego con un click !
                        <h3>a jugar!</h3>
                    </p>

                </div>

                <Eleccion jugador={eleccionJugador} maquina={eleccionMaquina} />

                <div className="opciones">
                    {
                        opciones.map((e, index) => <Opcion
                            elegir={elegirOpcion}
                            valor={opciones[index]}
                        />)
                    }
                </div>

                 <Routes eleccionJugador={eleccionJugador} eleccionMaquina={eleccionMaquina} /> 
            </body>
        </div>
    );
}

export default App;
