// import image2 from '../graphics/images/pexels-lumn-237692.jpg'
// import image1 from '../graphics/images/pexels-blue-bird-7210754.jpg'
import carrusel1 from '../graphics/images/carrusel1.jpg';
import carrusel2 from '../graphics/images/carrusel2.jpg';
import carrusel3 from '../graphics/images/carrusel3.jpg';
export const Carrusel = ({ image, text, description }) => {
    const sizing = {
        'object-fit': 'cover'
    }
    return (
        <div className="col-12">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={carrusel1} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' style={sizing} height={'600px'} />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg> */}
                    </div>
                    <div className="carousel-item active">
                        <img src={carrusel2} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' style={sizing} height={'600px'} width={'800px'} />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg> */}
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel3} alt="" className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' style={sizing} height={'600px'} width={'800px'} />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}



      // <div className="col-12">
        //     <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        //         <div className="carousel-indicators">
        //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         </div>
        //         <div className="carousel-inner">
        //             <div className="carousel-item active" data-bs-interval="10000">
        //                 <img src={image2} className="d-block w-100 h-50" alt="..."/>
        //                     <div className="carousel-caption d-none d-md-block">
        //                         <h5>First slide label</h5>
        //                         <p>Some representative placeholder content for the first slide.</p>
        //                     </div>
        //             </div>
        //             <div className="carousel-item" data-bs-interval="2000">
        //                 <img src={image2} className="d-block w-100" alt="..."/>
        //                     <div className="carousel-caption d-none d-md-block">
        //                         <h5>Second slide label</h5>
        //                         <p>Some representative placeholder content for the second slide.</p>
        //                     </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img src={image1} className="d-block w-100" alt="..."/>
        //                     <div className="carousel-caption d-none d-md-block">
        //                         <h5>Third slide label</h5>
        //                         <p>Some representative placeholder content for the third slide.</p>
        //                     </div>
        //             </div>
        //         </div>
        //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="visually-hidden">Next</span>
        //         </button>
        //     </div>
        // </div>