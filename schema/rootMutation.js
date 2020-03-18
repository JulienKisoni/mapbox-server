const graphql = require('graphql');
const { GraphQLObjectType, 
     GraphQLNonNull, GraphQLFloat } = graphql;

const PinType = require('./pinType');
const Pin = require('../models/pin');

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        addPin: {
            type: PinType,
            args: {
                latitude: { type: new GraphQLNonNull(GraphQLFloat) },
                longitude: { type: new GraphQLNonNull(GraphQLFloat) },
            }, 
            async resolve(parrentValue, { latitude, longitude }) {
                // console.log('addPin called');
                const pin = await new Pin({
                    latitude,
                    longitude
                }).save();
                return pin;
            }
        }
    }
});

module.exports = RootMutationType;