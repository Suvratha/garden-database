const ajaxCall = function (test) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (test) {
                resolve("success");
            }
            else {
                reject("failure");
            }
        }, 2000);
    });
}




const promise = ajaxCall(false);

console.log("i just continue here and wait for the call to be done");
let loading = true;
promise.then(successMsg => {
    loading = false;
    console.log(successMsg)
}).catch(error => {
    console.log(error);
});

