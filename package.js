Package.describe({
  name: 'ostrio:aes-crypto',
  version: '1.1.0',
  summary: 'Simplified isomorphic API for AES cipher by CryptoJS',
  git: 'https://github.com/VeliovGroup/meteor-aes-crypto',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript');
  api.mainModule('aes-crypto.js');
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest']);
  api.use('ostrio:aes-crypto');
  api.addFiles('aes-crypto-tests.js');
});
