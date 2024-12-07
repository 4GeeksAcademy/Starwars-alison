import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.obtenerInfoPersonaje(theid)
	}, [])
	return (
		<div className="container">
			<div className="card mb-3 border border-dark card-img-top rounded border border-dark m-3" style={{ width: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}  className="img-fluid rounded-start w-100 h-100"  style={{ objectFit: "cover" }}alt={store.person?.properties?.name} />
					</div>
					<div className="col-md-8">
						<div className="card-body text-dark  text-opacity-50 bg-dark bg-opacity-25">
							<p className="card-title shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Name : {store.person?.properties?.name}</p>
							<p className="card-text  shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Gender : {store.person?.properties?.gender}</p>
							<p className="card-text  shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Mass : {store.person?.properties?.mass}</p>
							<p className="card-text  shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Eye color : {store.person?.properties?.eye_color}</p>
							<p className="card-text  shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Hair color : {store.person?.properties?.hair_color}</p>
							<p className="card-text  shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Height : {store.person?.properties?.height}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
}
export default Single