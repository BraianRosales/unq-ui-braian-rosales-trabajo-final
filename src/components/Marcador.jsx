import React from 'react';

export default function Marcador(props) {

    return (
        <div className="marcador">
            <div className="user-label badge"> user</div>
            <div className="comp-label badge"> PC </div>
            <span id="user-score"> 0 </span> :
            <span id="comp-score"> 0 </span>
        </div>
    );
}