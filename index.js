const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('app listening on port 4000');
});