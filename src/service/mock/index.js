const create = function (plant) {
    localStorage.setItem(
        plant.name, JSON.stringify(plant)
    );
};

export default { create }