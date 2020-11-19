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

const validateUser = function(input){ 
    console.log("In validateUser method");
    if(input.username!=null && input.password !=null){
        if(input.username== "test" && input.password=="test"){
            return true;
        }
    }
    return false;
}

export default { create, read, validateUser }