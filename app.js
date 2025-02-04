const express = require("express");
const app = express();
const mongoose=require("mongoose");
const Listing=require("../travelicious/models/listing.js");
const path=require("path");
const methodOverride=require("method-override");

const MONGO_URL="mongodb://127.0.0.1:27017/travelicious";

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{
    res.send("Hi, i am root");
});

//Index Route
app.get("/listings", async (req,res) =>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
});

//new route
app.get("/travelicious/views/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;

    // Validate the id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid Listing ID");
    }

    try {
        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).send("Listing not found");
        }
        res.render("listings/show.ejs", { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

//Create Route
app.post("/travelicious/views/listings/new.ejs",async(req,res)=>{
    // let{title, description, image, price, country, location}=req.body;
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//edit route
app.get("/listings/:id/edit",async(req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit",{listing});
});

//update route
app.put("/listing/:id",async (req,res)=>{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id",async(req,res)=>{
    let { id } = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

// app.get("/testListing", async (req,res) => {
//      let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//      });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("successful testing");
// });

app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});