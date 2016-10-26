# meteor-server-oauth2
Secure call to other meteor instances

# ResourceServer
**Meteor methods:**
### getClientToken
to return or create new token for remote client
* parameters:
  * **remoteClientID**, **remoteClientSecret**
    * these are should be previously configured for using from *Remote Server*
  * **tokenForData**
    * **clientId** - unique ID for the client
    * **expire** - Date where token should be expired
* response:
  * tokenData
    * clientId
    * clientToken

### disableClientToken
to disable Token for remote client
* parameters:
  * **remoteClientID**, **remoteClientSecret**
    * these are should be previously configured for using from *Remote Server*
  * **clientId** - uniqueID for the client

### enableClientToken
to enable Token for remote client
* parameters:
  * **remoteClientID**, **remoteClientSecret**
    * these are should be previously configured for using from *Remote Server*
  * **clientId** - uniqueID for the client

# RemoteServer
**Meteor methods:**
### getAccessTokenTo
* parameters:
  * **remoteServerName**
    * will use currently logged in userId and call ResourceServer.getClientToken method
* response:
  * **token**
    * token for access remote server

# Flow
1. Authenticated client call `getAccessTokenTo(RemoteServerName)` in local backend
2. Local backend (RemoteServer) call `getClientToken(RemoteClientId, RemoteClientSecret, {Meteor.userId, expire})`
3. the access token will be stored to `user.services.remoteServer.<serverName>.token` and pushed to client for use
