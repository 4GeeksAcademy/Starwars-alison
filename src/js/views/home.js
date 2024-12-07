import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import People from "./people";
import Planets from "./planet";
import Vehicles from "./vehicles";

export const Home = () => (
	<div className="text-center text-light text-opacity-50 bg-dark bg-opacity-25">
		<People />
		<Planets />
		<Vehicles/>
	</div>
);