import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicles = () => {

    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        if (theid) {
            actions.obtenerInfoVehiculo(theid);
        }
    }, [theid]);

    return (
        <div className="container">
            {store.selectedVehicle?.properties ? (
                <div className="card mb-3 border border-dark card-img-top rounded border-dark m-3" style={{ width: "auto" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${store.selectedVehicle.uid}.jpg`}
                                className="img-fluid rounded-start w-100 h-100"
                                style={{ objectFit: "cover" }}
                                alt={store.selectedVehicle.properties.name || "Vehicle"}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-opacity-50 bg-dark bg-opacity-25">
                                <p className="card-text shadow p-3 mb-5 rounded text-light bg-dark bg-opacity-50">
                                    <strong>Name:</strong> {store.selectedVehicle.properties.name || "Unknown"}
                                </p>
                                <p className="card-text shadow p-3 mb-5 rounded text-light bg-dark bg-opacity-50">
                                    <strong>Model:</strong> {store.selectedVehicle.properties.model || "Unknown"}
                                </p>
                                <p className="card-text shadow p-3 mb-5 rounded text-light bg-dark bg-opacity-50">
                                    <strong>Vehicle Class:</strong> {store.selectedVehicle.properties.vehicle_class || "Unknown"}
                                </p>
                                <p className="card-text shadow p-3 mb-5 rounded text-light bg-dark bg-opacity-50">
                                    <strong>Manufacturer:</strong> {store.selectedVehicle.properties.manufacturer || "Unknown"}
                                </p>
                                <p className="card-text shadow p-3 mb-5 rounded text-light bg-dark bg-opacity-50">
                                    <strong>Cost:</strong> {store.selectedVehicle.properties.cost_in_credits || "Unknown"}
                                </p>
                                <p className="card-text shadow p-3 mb-5 rounded text-light bg-dark bg-opacity-50">
                                    <strong>Length:</strong> {store.selectedVehicle.properties.length || "Unknown"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2>Loading vehicle details...</h2>
            )}
        </div>
    );
};

export default SingleVehicles;
