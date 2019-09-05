import React from 'react';
import Card from './Card';


const CardList = ({ estudiantes }) => {
    return(
        <div className='card-student-container'>
            {
                estudiantes.map((user, i) => {
                    return (
                        <Card
                            key={estudiantes[i].id}
                            id={estudiantes[i].id}
                            apellido={estudiantes[i].apellido}
                            nombre={estudiantes[i].nombre}
                            rut={estudiantes[i].rut}
                            curso={estudiantes[i].curso}
                            asignatura={estudiantes[i].asignatura}
                            profesor={estudiantes[i].profesor}
                            bg={estudiantes[i].img}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;