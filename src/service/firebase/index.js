import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const create = function (plant) {
    firestore.collection("plants").add(plant);
};

const read = function () {
    var plants = [];

    const executor = function (resolve, reject) {
        firestore.collection("plants").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                plants.push(doc.data());

            });
            resolve(plants);
        }).catch((error)=>{
            console.log("Error occured", error);
            reject(error);
        });
    };
    return new Promise(executor);
}

export default{create, read}