const create = function (plant) {
    var values = JSON.parse(localStorage.getItem("plantsTable"));
    if (!values) {
        values = [];
    }
    values.push(plant);
    localStorage.setItem("plantsTable", JSON.stringify(values));
};

const read = function () {
    return JSON.parse(localStorage.getItem("plantsTable")) || [];
}

export default { create, read }