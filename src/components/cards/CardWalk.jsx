import { bg_primary } from "../../aux/style";

export const CardWalk = ({image,text,description}) => {
    const style = {
        width: '18rem'
    };
    return (
        <div className="col-10 col-md-6 col-lg-5">
            <div className="card w-100 mb-5 mb-md-0 shadow-lg" style={style}>
                <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{description}</h5>
                        <p className="card-text">{text}</p>
                        <button  className="btn text-white" style={bg_primary}>{description}</button>
                    </div>
            </div>
        </div>
    )
}