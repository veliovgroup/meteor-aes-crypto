import { AESencrypt, AESdecrypt } from 'meteor/ostrio:aes-crypto';

var res = '';
Tinytest.add('AESencrypt()', function (test) {
  res = AESencrypt('My Plain String', 'TXkgUGxhaW4gU3RyaW5n');
  test.isTrue(/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(res));
});

Tinytest.add('AESdecrypt()', function (test) {
  test.equal(AESdecrypt(res, 'TXkgUGxhaW4gU3RyaW5n'), 'My Plain String');
});
