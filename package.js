Package.describe({
  name: 'kostanos:meteor-server-oauth2',
  version: '1.0.0',
  summary: 'Make meteor multi-server method call secured',
  git: 'https://github.com/Kostanos/meteor-server-oauth2.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['underscore', 'check']);
  api.versionsFrom('1.0.4.2');

  api.addFiles('ResourceApp/index.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('benoitt:intl');
});