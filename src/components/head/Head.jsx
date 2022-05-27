import welcome from '../graphics/images/welcome.jpg';
export const Head = () => {
    const style = {
        'object-fit': 'cover',
        'filter': 'brightness(60%)',
    }
    return (
        <div className="col-12 mt-4 pt-4 d-md-none text-center card text-white bg-dark">
            <img src={welcome} className="card-img w-100 " alt="Dogs" style={style} />
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores, cupiditate ea laborum magnam quos. Iste
                    totam eveniet inventore facilis aliquam ipsum voluptate laboriosam? Atque tempora optio rem itaque alias.</p>
            </div>

        </div>
    )
}