// import image2 from '../graphics/images/pexels-lumn-237692.jpg'
// import image1 from '../graphics/images/pexels-blue-bird-7210754.jpg'
import carrusel1 from '../graphics/images/carrusel1.jpg';
import carrusel2 from '../graphics/images/dogs.jpg';
import carrusel3 from '../graphics/images/Walkdogger.jpg';
export const Carrusel = () => {
    const sizing = {
        'object-fit': 'cover',
        'filter': 'brightness(60%)',
        'height': '800px'
    }
    return (
        <div className="d-none d-md-block col-md-12 mt-5 p-5" id='inicio'>
            <div id="carouselExampleCaptions" className="carousel slide mt-md-3 mt-lg-5" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carrusel3} className="d-block w-100" alt="carrusel1" style={sizing} />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='fw-bold'>WALKDOG</h1>
                            <p>Tranquilidad para ti y tu mascota te ofrece WALKDOG con los mejores y mas preparados paseadores</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel2} className="d-block w-100" alt="carrusel2" style={sizing} />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='fw-bold'>WALKDOG</h1>
                            <p>Aquí cuidamos a tus mascotas como si fueran nuestras, por eso estamos comprometidos a brindar el mejor paseo para ellos.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel1} className="d-block w-100" alt="carrusel3" style={sizing} />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='fw-bold'>WALKDOG</h1>
                            <p>Los paseaderos están capacitados para ofrecerle una experiencia única a tu amigo.  </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}



    // <div className="d-none d-md-block col-md-12 ">
        //     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        //         <div className="carousel-inner">
        //             <div className="carousel-item">
        //                 <img src={carrusel1} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' style={sizing} height={'600px'} />
        //             </div>
        //             <div className="carousel-item active">
        //                 <img src={carrusel2} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' style={sizing} height={'600px'} width={'800px'} />
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={carrusel3} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' style={sizing} height={'600px'} width={'800px'} />
        //             </div>
        //         </div>
        //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>