const express = require('express');
const app = express();
const http = require('http').createServer(app);
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const io = require('socket.io')(http);

const schema = require('./schema/schema');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected'))
    .catch(e => console.log('DB not connected', e));

// app.use(bodyParser.json());
app.use(cors());
app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema
}));

io.on('connection', (socket) => {
    console.log('client connected');
})

http.listen(4000, () => {
    console.log('app listening on port 4000');
});