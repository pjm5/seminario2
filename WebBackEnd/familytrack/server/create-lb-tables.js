
var server = require('./server');
var ds = server.dataSources.herokudb;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'Group',
  'Group_member', 'Position_member', 'userRol'];

ds.autoupdate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ',
    ds.adapter.name);
  ds.disconnect();
});
