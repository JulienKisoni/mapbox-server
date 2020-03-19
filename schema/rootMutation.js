const graphql = require('graphql');
const { GraphQLObjectType, 
     GraphQLNonNull, GraphQLFloat } = graphql;
const { PubSub } = require('apollo-server');

const PinType = require('./pinType');
const Pin = require('../models/pin');

const pubsub = new PubSub();

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
                pubsub.publish('PIN_ADDED_SUBSCRIPTION', { pin })
                    .then(data => console.log('published', data, pin))
                    .catch(e => console.log('not published', e));
                return pin;
            }
        }
    }
});

module.exports = RootMutationType;