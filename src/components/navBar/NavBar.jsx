import { IconMenu } from "../graphics/icons/Menu"
import { IconLogo } from "../graphics/icons/Logo"
import { IconLogIn } from "../graphics/icons/LogIn"
import { bg_primary } from "../../aux/style"
export const NavBar = () => {

    return (

        <nav class="navbar navbar-expand-lg fixed-top" style={bg_primary}>
            <div class="container-fluid h-25">
                <a className="navbar-brand" href='/'>
                    <IconLogo px={'40px'} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span><IconMenu px={'40px'} /></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/">Paseo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">Planes</a>
                        </li>
                    </ul>
                    <figure className="pt-3">
                        <IconLogIn px={'60px'}/>
                    </figure>
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