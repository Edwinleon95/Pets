import welcome from '../graphics/images/welcome.jpg';
export const Head = () => {
    const style = {
        'object-fit': 'cover',
        'filter': 'brightness(60%)',
    }
    return (
        <div className="col-12 mt-3 pt-5 d-md-none text-center card text-white bg-dark">
            <img src={welcome} className="card-img w-100 " alt="Dogs" style={style} />
            <div className="card-img-overlay">
                <h1 className="card-title mt-5">WALKDOG</h1>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores, cupiditate ea laborum magnam quos. Iste
                    totam eveniet inventore facilis aliquam ipsum voluptate laboriosam? Atque tempora optio rem itaque alias.</p>
            </div>

        </div>
    )
}