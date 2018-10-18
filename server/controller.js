const models = require("./models.js")
const Cake = models["cake"];
const Rating = models["rating"];

module.exports ={
    allCakes: function(req,res){
        Cake.find({})
            .then((data)=>{return res.json(data)})
            .catch((err)=>{return res.json(err)});
        // return res.json({"status":"working"})
    },
    newCake: function(req,res){
        Cake.create(req.body, {new:true,runValidators:true})
            .then((data)=>{return res.json(data)})
            .catch((err)=>{
                console.log(err);
                return res.json(err)
            });
    },
    rateCake:  function(req,res){
        console.log(`Hitting controller. Rate: ${req.body}`)
        Cake.findByIdAndUpdate(req.params.id,{$push:{ratings:req.body}})
            .then((data)=>{return res.json(data)})
            .catch((err)=>{return res.json(err)});
    },
    // deleteCake: function(req,res){
    //     Cake.findByIdAndDelete()
    //         .then((data)=>{return res.json(data)})
    //         .catch((err)=>{return res.json(err)});
    // },
    // updateCake: function(req,res){
    //     Cake.findByIdAndUpdate()
    //         .then((data)=>{return res.json(data)})
    //         .catch((err)=>{return res.json(err)});
    // }
}