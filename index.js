
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/register', function(req, res) {
    res.send({
        message: "Well hello there!",
    })
})

app.get('/amanda', function(req, res) {
    res.send(
        `<h1 style="color: red">Amanda is hot!</h1>`
    )
})

app.listen(8081)
