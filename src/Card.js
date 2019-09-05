import React from 'react';

const Card = ({id, apellido, nombre, rut, curso, asignatura, profesor, bg}) => {

    // const bgimg = {
    //     backgroundImage: `url(http://robohash.org/${id}?200x400)`
    // }
    return(
        <div className="card-student">
            <header className="card-student-header" style={{backgroundImage:`url(${bg})`}}>
                <div className="card-student-header__block">
                    <div className="card-student-header__numero-lista">
                        {id}
                    </div>
                    <div className="card-student-header__nombre-completo">
                        <h2 className="card-student-header__nombre-completo--apellidos">{apellido}</h2>
                        <h3 className="card-student-header__nombre-completo--nombres">{nombre}</h3>
                    </div>
                </div>
                <div className="card-student-header__block">
                    <div className="card-student-header__rut">
                        <p>{rut}</p>
                    </div>
                    <div className="card-student-header__curso">
                        <p>{curso}</p>
                    </div>
                </div>
            </header>
            <section className="card-student-body">
                <div className="card-student-body__block">
                    <span className="card-student-body__title">Asignatura:</span>
                    <h4 className="card-student-body__asignatura">{asignatura}</h4>
                </div>
                <div className="card-student-body__block">
                    <span className="card-student-body__title">Nombre Profesor:</span>
                    <h4 className="card-student-body__profesor">{profesor}</h4>
                </div>
            </section>
            <footer className="card-student-cta">
                <button className="btn-check ausente"><span className="ausente">Ausente</span>    <span className="presente">Presente</span></button>
                <span className="hand-up"></span>
            </footer>
        </div>
    )
}

export default Card;