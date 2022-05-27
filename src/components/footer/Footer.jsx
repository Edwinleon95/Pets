import { bg_footer } from "../../aux/style"
import { IconFacebook } from "../graphics/icons/Facebook"
import { IconInstagram } from "../graphics/icons/Instragram"
import { IconLogo } from "../graphics/icons/Logo"
import { IconWhatsapp } from "../graphics/icons/Whatsapp"

export const Footer = () => {
    const sizing = {
        'width':'30%'
    }
    return (
        <>
            <div className="col-12  text-white d-md-none mt-5" style={bg_footer}>
                <div className="d-flex align-items-center">
                <IconLogo px={'40px'} />
                <h5 className="m-0 p-0">WALKDOG</h5>
                </div>
                <h4>Nosotros</h4>
                    <h5>Redes sociales</h5>
                    <div className="d-flex justify-content-between" style={sizing}>
                        <IconWhatsapp px={"30px"}/>
                        <IconFacebook px={"30px"}/>
                        <IconInstagram px={"30px"}/>
                    </div>
            </div>
            <div className="d-none col-md-12  text-white d-md-block mt-5 d-md-flex justify-content-around" style={bg_footer}>
                <div className="p-3">
                    <div className="d-flex align-items-center">
                        <IconLogo px={'60px'} />
                        <h4 className="m-0 p-0">WALKDOG</h4>
                    </div>
                    <p className="mx-2">Nosotros</p>
                </div>
                <div className="w-25 text-center p-3">
                    <h5>Redes sociales</h5>
                    <div className="d-flex justify-content-around">
                        <IconWhatsapp px={"40px"}/>
                        <IconFacebook px={"40px"}/>
                        <IconInstagram px={"40px"}/>
                    </div>
                </div>
            </div>
        </>
    )
}