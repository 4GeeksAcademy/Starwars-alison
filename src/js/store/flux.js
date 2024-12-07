const getState = ({ getStore, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            person: {},
            planeta: {},
            favorito: [],
            vehicles: [],  
            selectedVehicle: {}  
        },
        actions: {
            // Obtener la lista de personajes
            obtenerPersonajes: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const data = await response.json();
                    setStore({ people: data.results });
                    return true;
                } catch (error) {
                    console.error("Error fetching people:", error);
                    return false;
                }
            },

            // Obtener la lista de planetas
            obtenerPlanetas: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const data = await response.json();
                    setStore({ planets: data.results });
                    return true;
                } catch (error) {
                    console.error("Error fetching planets:", error);
                    return false;
                }
            },

            // Obtener la lista de vehículos
            obtenerVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            // Obtener detalles de un vehículo específico
            obtenerInfoVehiculo: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await response.json();
                    setStore({ selectedVehicle: data.result });
                } catch (error) {
                    console.error("Error fetching vehicle details:", error);
                }
            },

            // Obtener detalles de un personaje específico
            obtenerInfoPersonaje: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                    const data = await response.json();
                    setStore({ person: data.result });
                    return true;
                } catch (error) {
                    console.error("Error fetching character details:", error);
                    return false;
                }
            },

            // Obtener detalles de un planeta específico
            obtenerInfoPlaneta: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    const data = await response.json();
                    setStore({ planeta: data.result });
                    return true;
                } catch (error) {
                    console.error("Error fetching planet details:", error);
                    return false;
                }
            },

            // Agregar o quitar un favorito
            favoritos: (item) => {
                const store = getStore();
                if (store.favorito.includes(item)) {
                    // Si ya está en la lista de favoritos, eliminarlo
                    const aux = store.favorito.filter((elem) => elem !== item);
                    setStore({ favorito: aux });
                } else {
                    // Si no está en la lista de favoritos, agregarlo
                    setStore({ favorito: [...store.favorito, item] });
                }
            }
        }
    };
};

export default getState;
