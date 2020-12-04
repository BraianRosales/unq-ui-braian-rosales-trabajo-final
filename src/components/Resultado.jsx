import React from 'react';

const Resultado = ({ jugador, maquina }) => {

    let resultadoFinal;

    if ((jugador.derrota === maquina.eleccion && jugador.eleccion ||
        jugador.tambienDerrota === maquina.eleccion && jugador.eleccion)) {
        resultadoFinal = <h1>Ganador : Jugador</h1>

    } else if ((maquina.derrota === jugador.eleccion && jugador.eleccion ||
        maquina.tambienDerrota === jugador.eleccion && jugador.eleccion)) {
        resultadoFinal = <h1>Ganador : La Maquina</h1>

    } else if (jugador.eleccion === maquina.eleccion && jugador.eleccion) {
        resultadoFinal = <h1>Empate</h1>
    }
    return (
        <>
            <div className="resultado">
                <h2>{resultadoFinal}</h2>
            </div>
        </>
    )
}

export default Resultado;