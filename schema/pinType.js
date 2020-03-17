const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLID } = graphql;

// const Pin = require('../models/pin');

const PinType = new GraphQLObjectType({
    name: 'PinType',
    fields: {
        id: { type: GraphQLID },
        latitude: { type: GraphQLInt },
        longitude: { type: GraphQLInt }
    }
});

module.exports = PinType;