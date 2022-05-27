// import image2 from '../graphics/images/pexels-lumn-237692.jpg'
// import image1 from '../graphics/images/pexels-blue-bird-7210754.jpg'
import carrusel1 from '../graphics/images/carrusel1.jpg';
import carrusel2 from '../graphics/images/carrusel2.jpg';
import carrusel3 from '../graphics/images/carrusel3.jpg';
export const Carrusel = () => {
    const sizing = {
        'object-fit': 'cover',
        'filter': 'brightness(60%)',
        'height': '600px'
    }
    return (
        <div className="d-none d-md-block col-md-12 mt-5">
            <div id="carouselExampleCaptions" className="carousel slide mt-md-3 mt-lg-5" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carrusel1} className="d-block w-100" alt="carrusel1" style={sizing} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel2} className="d-block w-100" alt="carrusel2"  style={sizing} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel3} className="d-block w-100" alt="carrusel3"  style={sizing} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
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