import { bg_primary, bg_secondary, bg_section } from "../../aux/style"
import { IconLogIn } from "../graphics/icons/LogIn"

export const Modal = ({onClick,onClose}) => {
    return (
        <figure className="pt-3">
            <div className="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" aria-hidden="true" style={bg_section}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={bg_primary}>
                        <div className="modal-header text-white">
                            <h5 className="modal-title fw-bold" id="exampleModalToggleLabel">Iniciar sesion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-body text-white">
                                <h5>Usuario</h5>
                                <input type="email" />
                                <h5>Contraseña</h5>
                                <input type="password" />
                                <p> <a href="/" role="button" className="btn btn-secondary mt-2" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute." style={bg_secondary}>Iniciar sesion</a></p>
                                <h5>¿No tienes cuenta?</h5>
                                <a href="http://localhost:3000/" data-bs-toggle="tooltip" title="Tooltip">Registrarse</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onClick={onClick}><IconLogIn px={'30px'} /></a>
        </figure>
    )
}