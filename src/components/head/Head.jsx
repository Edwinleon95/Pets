import welcome from '../graphics/images/dogsHead.jpg';
export const Head = () => {
const style = {
'object-fit': 'cover',
'filter': 'brightness(30%)',
}
return (
<div className="col-12 mt-3 pt-5 d-md-none text-center card text-white bg-dark" id='head'>
    <img src={welcome} className="card-img w-100 " alt="Dogs" style={style} />
    <div className="card-img-overlay">
        <h1 className="card-title mt-5 fw-bold">WALKDOG</h1>
        <p className="card-text">¿Sin tiempo suficiente para darle un paseo a tu mejor amigo? No te preocupes, tenemos
            la solución.En WALKDOG encontraras la mejor compañía para que tu peludo tenga un paseo increíble.</p>
    </div>

</div>
)
}