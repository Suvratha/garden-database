const create = function(plant) {
  var values = JSON.parse(localStorage.getItem("plantsTable"));
  if (!values) {
    values = [];
  }
  values.push(plant);
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

export default { create, read, validateUser };
