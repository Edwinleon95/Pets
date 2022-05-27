import { IconMenu } from "../graphics/icons/Menu"
import { IconLogo } from "../graphics/icons/Logo"
import { IconLogIn } from "../graphics/icons/LogIn"
import { bg_primary } from "../../aux/style"
export const NavBar = () => {

    return (
        <>
            <div className="col-12 d-md-none fixed-top shadow" style={bg_primary}>
                <IconMenu />
            </div>
            <div className="col-12 d-none d-md-block  d-md-flex justify-content-between text-white fixed-top shadow rounded-bottom" style={bg_primary}>
                <IconLogo px={'60px'} />
                <div className="d-flex justify-content-evenly align-items-center w-50">
                    <p className="fs-2 m-0">Inicio</p>
                    <p className="fs-2 m-0">Paseo</p>
                    <p className="fs-2 m-0">Planes</p>
                </div>
                <figure className="mt-2">
                    <IconLogIn px={'50px'} />
                </figure>
            </div>
        </>
    )
}