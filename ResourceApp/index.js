import {Mongo} from 'meteor/mongo';

var ResourceApp = {
  collections: {
    // Collection where all RemoteClients are configured
    // clientId, clientName, clientSecret, active
    clients: new Mongo.Collection('resourceAppClients'),
    // Collection where all generated Tokens are stored
    // clientId, token, expire, active, data
    tokens: new Mongo.Collection('resourceAppTokens'),
  }
};

Meteor.method('getClientToken', function(remoteClientId, remoteClientSecret, data){
  // First authorize the remote client
  return 'test';
});

export ResourceApp;