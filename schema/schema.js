const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./rootQueryType');
const RootMutationType = require('./rootMutation');

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});