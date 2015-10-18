Package.describe({
  name: 'ostrio:aes-crypto',
  version: '1.0.0',
  summary: 'Simplified isomorphic API for AES cipher by CryptoJS',
  git: 'https://github.com/VeliovGroup/meteor-aes-crypto',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ostrio:base64@1.0.0');
  api.addFiles('aes-crypto.js');
  api.export('AESencrypt');
  api.export('AESdecrypt');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ostrio:aes-crypto');
  api.addFiles('aes-crypto-tests.js');
});
