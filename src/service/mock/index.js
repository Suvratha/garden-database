const create = function (plant) {
    var values = JSON.parse(localStorage.getItem("plantsTable"));
    if (!values) {
        values = [];
    }
    values.push(plant);
    localStorage.setItem("plantsTable", JSON.stringify(values));
};

const read = function () {
    const executor = function(resolve){
        resolve(JSON.parse(localStorage.getItem("plantsTable"))|| []);
    } ; 
    return new Promise(executor);//JSON.parse(localStorage.getItem("plantsTable")) || [];
}

export default { create, read }