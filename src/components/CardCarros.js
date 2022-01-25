import React from 'react';

function CardCarros({carro}) {

    console.log(carro)

  return (
                <div>
                        <h2>Archivo importado de cards</h2>
                            <li key={carro.id}>
                                <h3>{carro.nombre}</h3>
                                <h4>{carro.marca}</h4>
                                <h4>{carro.modelo}</h4>
                                <h4>{carro.color}</h4>
                                <h4>{carro.transmision}</h4>
                                <h2>{carro.precio}</h2>
                                <img src={carro.imagen} alt="100" width="100"></img>
                                
                            </li>

                </div>
  );
}

export default CardCarros;
