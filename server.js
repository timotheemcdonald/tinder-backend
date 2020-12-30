import express from 'express'
import mongoose from 'mongoose'

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:657dDjTvsj73FJDD@cluster0.4497d.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middleware

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API end points
app.get('/', (req, res) => {
    res.status(200).send('HELLO WORLD');
})

// Listener
app.listen(port, () => {
    console.log(`listening on localhost: ${port}`)
})