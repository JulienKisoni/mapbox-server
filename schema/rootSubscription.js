const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const { PubSub } = require('apollo-server');

const PinType = require('./pinType');
const pubsub = new PubSub();

const rootSubscriptionType = new GraphQLObjectType({
    name: 'RootSubscriptionType',
    fields: {
        pinAdded: {
            type: PinType,
            resolve(parrentValue) {
                console.log('resolve');
                return pubsub.asyncIterator("PIN_ADDED_SUBSCRIPTION");
            },
            subscribe(){
                console.log('sub');
                return pubsub.asyncIterator("PIN_ADDED_SUBSCRIPTION");
            }
        }
    }
});

module.exports = rootSubscriptionType;