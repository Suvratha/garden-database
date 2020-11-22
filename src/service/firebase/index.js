import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
        apiKey: process.env.VUE_APP_API_KEY,
        authDomain: process.env.VUE_APP_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_DATABASE_URL,
        projectId: process.env.VUE_APP_PROJECT_ID,
        storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_APP_ID
}

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

const validateUser = function(input){ 
    return firebase.auth().signInWithEmailAndPassword(input.username, input.password);
}

export default{create, read, validateUser}