const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require('body-parser')
app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));
const MONGO_URL = "mongodb://127.0.0.1:27017/hotel taj website"; 

main()
.then(() => {
    console.log("connected to DB");
})
   .catch((err) => {
console.log(err);
});


async function main(){
    await mongoose.connect(MONGO_URL);
}

// //Basic API Create

// app.get("/", (req, res) => {
//     res.send("Hii, I am Suryansh");
//  });



app.get("/", (req, res) => {
    res.render("my_template.ejs");
});

app.get("/booking", (req, res) => {
    res.render("booking.ejs");
})

app.get("/awards", (req, res) => {
    res.render("awards.ejs");
})

app.get("/guest_details", (req, res) => {
    res.render("guest_details.ejs");
});

app.get("/hotels", (req, res) => {
    res.render("hotels.ejs");
})

app.get("/login", (req, res) => {
    res.render("login.ejs");
})

app.get("/rooms", (req, res) => {
    res.render("rooms.ejs");
})

app.get("/maps", (req, res) => {
    res.render("maps.ejs");
})

app.get("/confirmaton_page", (req, res) => {
    res.render("confirmation_page.ejs");
});


app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});