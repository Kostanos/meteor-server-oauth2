// Admin publisher for configure remote clients
// This should be published only for authorized users
import {ResourceApp} from '../index';

ResourceApp.admin = {
  publish: function(){
    Meteor.publish('resourceAppClients', function(){
      return ResourceApp.collections.clients.find();
    });
    Meteor.publish('resourceAppClients', function(){
      return ResourceApp.collections.tokens.find();
    });
  },
}

export ResourceApp;