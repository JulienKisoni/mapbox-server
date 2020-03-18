const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const schema = require('./schema/schema');

const app = express();

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

app.listen(4000, () => {
    console.log('app listening on port 4000');
});