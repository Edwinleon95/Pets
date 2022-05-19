import { Div } from "./StyledLanding";
import perros from "../imagenes/perros.png"
import perrosSinfondo from "../imagenes/perrosSinfondo.png"

const LandingPage = () => {
    return (
        <Div>
            <div className="contenedor-izquierdo">
            <div className="menu-inicial">
                <p>Nosotros</p>
                <p>Servicios</p>
                <p>Contactanos</p>
            </div>
            <p className="texto">Los queremos tanto <br/>como tu, por eso <br/>nuestros paciadores <br/>son los mas <br/>comprometidos. </p>
            <button>Conoce más</button>
            <img src={perrosSinfondo} alt="perross" />
            </div>
            <div className="contenedor-derecho">
                <img src={perros} alt="perros" />
            </div>
          
        </Div>
    )
}


export default LandingPage;