import React, {Fragment} from 'react';
import CardList from './CardList';
import { estudiantes } from './estudiantes';

const App = () => {
    return(
        <Fragment>
           <header className="main-header">
                <div className="container">
                    <h1><span className="text-slim">Asistencia</span> <br/>Digital</h1>
                </div>
            </header>
            <div className="container">
                <CardList estudiantes={estudiantes} />
            </div>
        </Fragment>
    )
}

export default App;