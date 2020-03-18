const graphql = require('graphql');
const { GraphQLObjectType, GraphQLFloat, GraphQLID } = graphql;

// const Pin = require('../models/pin');

const PinType = new GraphQLObjectType({
    name: 'PinType',
    fields: {
        id: { type: GraphQLID },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat }
    }
});

module.exports = PinType;