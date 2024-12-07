import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = ({ id, name, imageURL, description }) => {
    const { actions, store } = useContext(Context)
    const isFavorite = store.favorito.includes(name);


    return (
        <div>
            <div className="card border border-dark" style={{ width: "18rem ", flex: "none", margin: "10px" }}>
                <img src={imageURL} className="card-img-top rounded border border-dark" alt={name} />
                <div className="card-body bg-dark bg-opacity-25 ">
                    <h5 className="card-title text-dark bg-dark bg-opacity-25">{name}</h5>
                    <p className="card-text text-danger">{description}</p>
                    <Link to={"/singleVehiclees/" + id} className="btn btn-dark text-light text-opacity-50">Learn More !</Link>
                    <button onClick={() => actions.favoritos(name)} type="button" className="btn btn-dark text-light text-opacity-50 m-1">
                        <span className="m-1">
                            <i className={`fa-solid fa-heart ${isFavorite ? "text-danger" : "text-secondary"}`}></i>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )

}


export default CardVehicles