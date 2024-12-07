
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardPlanet from "../component/cardplanet";


const Planets = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.obtenerPlanetas()

    }, [])
    return (
        <div>
        <h1 className="section-title">Planets</h1>
        <div className="d-flex flex-row overflow-scroll">
            {store.planets.map((item) => (
                <CardPlanet
                    key={item.uid}
                    id={item.uid}
                    name={item.name}
                    imageURL={item.uid === 1
                        ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                        : `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                    description="A planet within the Star Wars universe"
                />
            ))}
        </div>
    </div>
    
    )
}
export default Planets
