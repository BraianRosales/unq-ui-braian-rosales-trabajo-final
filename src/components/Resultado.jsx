import React from 'react';

const Resultado = (props) => {

    let resultadoFinal;

    if ((props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion ||
        props.jugador.tambienDerrota === props.maquina.eleccion && props.jugador.eleccion)) {
        resultadoFinal = <h1>Ganador : Jugador</h1>

    } else if ((props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion ||
        props.maquina.tambienDerrota === props.jugador.eleccion && props.jugador.eleccion)) {
        resultadoFinal = <h1>Ganador : La Maquina</h1>

    } else if (props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion) {
        resultadoFinal = <h1>Empate</h1>
    }
    return (
            <h2>{resultadoFinal}</h2> 
    )
}

export default Resultado;