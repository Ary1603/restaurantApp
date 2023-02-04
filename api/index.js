// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  isSupported } from "firebase/analytics";
import express from 'express';
import bodyParser from 'body-parser'


const app = express(); 
const PORT=3000;

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());  


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8oFC9woXdghKdqjfXmLXclyNub7dRZvA",
  authDomain: "app-restaurant-161fb.firebaseapp.com",
  databaseURL: "https://app-restaurant-161fb-default-rtdb.firebaseio.com",
  projectId: "app-restaurant-161fb",
  storageBucket: "app-restaurant-161fb.appspot.com",
  messagingSenderId: "1072686227933",
  appId: "1:1072686227933:web:6ebb9b428f87f30c9a5634",
  measurementId: "G-HW1101WRSL"
};

// Initialize Firebase
const appDB = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(appDB) : null);


// Create a reservation
import { getDatabase, ref, set } from "firebase/database";

function reservationWriter(reservationId, name, email, phone_number, reservation_day, reservation_hour) {
  const db = getDatabase();
  set(ref(db, 'Reservations/' + reservationId), {
    username: name, 
    email: email,
    phone: phone_number,
    day: reservation_day,
    hour: reservation_hour
  });
}

app.post('/make-reservation', (req, res) => {
  res.send("Se realizo la reservacion")
  reservationWriter(Date.now(),req.query.name, req.query.email, req.query.phone, req.query.reservationDay, req.query.reservationHour)
})

// Server setup
app.listen(PORT,() => {
    console.log('The application is listening '
          + 'on port http://localhost:'+PORT);
})

