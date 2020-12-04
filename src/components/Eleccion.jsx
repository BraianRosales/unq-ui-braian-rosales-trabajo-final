import React from 'react';
import Marcador from './Marcador';

export default function Eleccion(props) {
    return (
        <aside id="sidebar">
            <div className="sidebar-item">
                <main>
                    <section>
                        <div className="jugador"> <h3>Eleccion jugador : </h3></div>
                        <div className="eleccion">{props.jugador.eleccion}</div>
                    </section>
                    <section>
                        <div className="maquina"><h3>Eleccion maquina :  </h3></div>
                        <div className="eleccion">{props.maquina.eleccion}</div>
                    </section>

                    <Marcador />
                </main>
            </div>

        </aside>
    );
}
