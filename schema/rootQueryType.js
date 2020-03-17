const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const UserType = require('./userType');
const PinType = require('./pinType');
const User = require('../models/user');
const Pin = require('../models/pin');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            async resolve() {
                const users = await User.find({}).exec();
                console.log('users', users);
                return users;
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            async resolve(parrentValue, args) {
                const user = await User.findOne({ _id: args.id}).exec()
                return user;
            }
        },
        pins: {
            type: PinType,
            async resolve() {
                const pins = await Pin.find({}).exec();
                return pins;
            }
        }
    }
});

module.exports = RootQueryType;