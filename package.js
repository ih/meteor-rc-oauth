Package.describe({
  name: 'irvin:recurse',
  version: '0.0.1',
  summary: 'OAuth handler for Recurse Center',
  git: 'https://github.com/ih/meteor-rc-oauth',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-ui', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Recurse');

  api.addFiles(
    ['rc_configure.html', 'rc_configure.js'],
    'client');

  api.addFiles('rc_server.js', 'server');
  api.addFiles('rc_client.js', 'client');
});
