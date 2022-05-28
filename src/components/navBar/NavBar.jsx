import { IconMenu } from "../graphics/icons/Menu"
import { IconLogo } from "../graphics/icons/Logo"
import { bg_primary } from "../../aux/style"
import { Modal } from "../modal/Modal"
import { useState } from "react"
export const NavBar = () => {
const [position,setPosition] = useState(true)

const onClick = (e) => {
 setPosition(false)
}

const onClose = (e) => {
    setPosition(true)
}
    return (

        <nav className={`navbar navbar-expand-lg ${position?"fixed-top":null}`} style={bg_primary}>
            <div className="container-fluid h-25">
                <a classNameName="navbar-brand" href='/'>
                    <IconLogo px={'40px'} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><IconMenu px={'40px'} /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white d-none d-md-block" href="#inicio">Inicio</a>
                            <a className="nav-link text-white  d-md-none" href="#head">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#paseos">Paseo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#planes">Planes</a>
                        </li>
                    </ul>
                    <Modal onClick={onClick}
                           onClose={onClose}/>
                </div>
            </div>
        </nav>


    )
}

//    {/* <div className="col-12 d-md-none fixed-top shadow" style={bg_primary}> */}
//                 {/* <IconMenu />
//             </div>
//             <div className="col-12 d-none d-md-block  d-md-flex justify-content-between text-white fixed-top shadow rounded-bottom" style={bg_primary}>
//                 <IconLogo px={'60px'} />
//                 <div className="d-flex justify-content-evenly align-items-center w-50">
//                     <p className="fs-2 m-0">Inicio</p>
//                     <p className="fs-2 m-0">Paseo</p>
//                     <p className="fs-2 m-0">Planes</p>
//                 </div>
//                 <figure className="mt-2">
//                     <IconLogIn px={'50px'} />
//                 </figure> */}