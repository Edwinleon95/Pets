export const CardPlans = ({ title, text, description }) => {

    return (
        <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center text-center' id="planes">
            <div className="card text-bg-light mb-3 w-80 shadow-lg" >
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div >
    )
}