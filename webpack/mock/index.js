var ctx = process.env.CTX_ENV || ''

module.exports = function(app){
    app.get("/getDataA", function(req, res) {
        res.sendFile(__dirname + '/getDataA.json')
    })
    app.get("/getDataB", function(req, res) {
        res.sendFile(__dirname + '/getDataB.json')
    })
}