var controller = require("./controller.js")
module.exports = function(app){
    
    app.get("/cakes", controller.allCakes)
    app.post("/cakes", function(req,res){
        console.log(`Hitting controller. Cake=${req.body}`)
        controller.newCake(req,res);
    })
    app.put("/rate/:id", controller.rateCake)
}