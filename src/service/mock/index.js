const create = function(plant) {
  var values = JSON.parse(localStorage.getItem("plantsTable"));
  if (!values) {
    values = [];
  }
  values.push(plant);
  localStorage.setItem("plantsTable", JSON.stringify(values));
};

const update = function(plant) {
  var values = JSON.parse(localStorage.getItem("plantsTable"));
  if (!values) {
    values = [];
  }
  const index = values.findIndex(plantVar => plantVar.name === plant.name);

  values.splice(index, 1, plant);

  localStorage.setItem("plantsTable", JSON.stringify(values));
};

const read = function() {
  const executor = function(resolve) {
    resolve(JSON.parse(localStorage.getItem("plantsTable")) || []);
  };
  return new Promise(executor); //JSON.parse(localStorage.getItem("plantsTable")) || [];
};

const validateUser = function(input) {
  return new Promise((resolve, reject) =>{ //or  return new Promise( function(resolve,reject{}
    if (input.username != null && input.password != null) {
      if (input.username == "test" && input.password == "test") {
        resolve();
      }
    }
    reject();
  });
};

const findByName = async function(name) {
  const table = JSON.parse(localStorage.getItem("plantsTable")) || [];
  return table.find(plant => name === plant.name);
}

export default { create, read, validateUser, findByName, update };
