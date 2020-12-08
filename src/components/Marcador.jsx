import React from 'react';

let scoreUsuario = 0;
let scorePc = 0;

export default function Marcador({ jugador, maquina }) {

    if ((jugador.derrota === maquina.eleccion && jugador.eleccion ||
        jugador.tambienDerrota === maquina.eleccion && jugador.eleccion)) {
        scoreUsuario = scoreUsuario + 1
    } else if ((maquina.derrota === jugador.eleccion && jugador.eleccion ||
        maquina.tambienDerrota === jugador.eleccion && jugador.eleccion)) {
        scorePc = scorePc + 1
    }

    return (
        <div className="marcador">
            <div className="user-label badge"> user</div>
            <div className="comp-label badge"> PC </div>
            <span id="user-score"> {scoreUsuario / 2} </span> :
            <span id="comp-score"> {scorePc / 2} </span>
        </div>
    );
}