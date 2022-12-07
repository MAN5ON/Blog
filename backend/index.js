import express from "express";

const app = express()

app.use(express.json());

app.listen(666, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('server OK')
})