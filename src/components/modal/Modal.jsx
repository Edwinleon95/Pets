import { bg_primary, bg_secondary, bg_section } from "../../aux/style"
import { IconLogIn } from "../graphics/icons/LogIn"

export const Modal = ({ onClick, onClose }) => {
    return (
        <figure className="pt-3">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={onClick}>
                <IconLogIn px={'40px'} />
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true" style={bg_section}>
                <div className="modal-dialog">
                    <div className="modal-content" style={bg_primary}>
                        <div className="modal-header text-white">
                            <h5 className="modal-title" id="staticBackdropLabel">Iniciar sesion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body text-white">
                            <h5>Usuario</h5>
                            <input type="email" />
                            <h5>Contraseña</h5>
                            <input type="password" />
                            <p> <a href="/" role="button" className="btn btn-secondary mt-2" data-bs-toggle="popover"
                                title="Popover title" data-bs-content="Popover body content is set in this attribute." style={bg_secondary}>Iniciar sesion</a></p>
                            <h5>¿No tienes cuenta?</h5>
                            <a href="/" data-bs-toggle="tooltip" title="Tooltip">Registrarse</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    )
}