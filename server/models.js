const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/CakeDemo", function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Connect to database!")
    }
})

const RatingSchema = new mongoose.Schema({
    stars :{
        type:Number,
        required:true
    },
    comment:{
        type: String,
    }
})

const CakeSchema = new mongoose.Schema({
    name: {type:String ,required:true, minLength:2},
    servings: {type:Number, min:1, max:100},
    bakerName: {type: String, required: true},
    imgUrl: {type: String, required: true},

    ratings: [RatingSchema]
})



module.exports = 
{
    cake: mongoose.model("Cake", CakeSchema),
    rating: mongoose.model("Rating", RatingSchema)
}

