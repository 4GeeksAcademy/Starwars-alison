import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePlanet = () => {

    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.obtenerInfoPlaneta(theid)
    }, [])

    return (
        <div className="container">
            <div className="card mb-3  border border-dark card-img-top rounded border border-dark m-3" style={{ width: "auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={theid == 1 ?
                            "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                            : `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`} className="img-fluid rounded-start  w-100 h-100" style={{ objectFit: "cover" }} alt={store.planeta?.properties?.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body  text-opacity-50 bg-dark bg-opacity-25">
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Name : {store.planeta?.properties?.name}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">climate : {store.planeta?.properties?.climate}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light  text-opacity-50 bg-dark bg-opacity-50">Diameter : {store.planeta?.properties?.diameter}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Gravity : {store.planeta?.properties?.gravity}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light  text-opacity-50 bg-dark bg-opacity-50">Orbita : {store.planeta?.properties?.orbital_period}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Rotation : {store.planeta?.properties?.rotation_period}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )





}
export default SinglePlanet