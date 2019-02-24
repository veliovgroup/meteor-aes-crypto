import { AESencrypt, AESdecrypt } from 'meteor/ostrio:aes-crypto';

let res = '';
Tinytest.add('AESencrypt()', (test) => {
  res = AESencrypt('My Plain String', 'TXkgUGxhaW4gU3RyaW5n');
  test.isTrue(/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(res));
});

Tinytest.add('AESdecrypt()', (test) => {
  test.equal(AESdecrypt(res, 'TXkgUGxhaW4gU3RyaW5n'), 'My Plain String');
});

Tinytest.add('AESencrypt() emoji / UTF8 - value', (test) => {
  res = AESencrypt('🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица⦁⦁⦁⦶简传统日本人', 'TXkgUGxhaW4gU3RyaW5n');
  test.isTrue(/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(res));
});

Tinytest.add('AESdecrypt() emoji / UTF8 - value', (test) => {
  test.equal(AESdecrypt(res, 'TXkgUGxhaW4gU3RyaW5n'), '🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица⦁⦁⦁⦶简传统日本人');
});

Tinytest.add('AESencrypt() emoji / UTF8 - key', (test) => {
  res = AESencrypt('TXkgUGxhaW4gU3RyaW5n', '🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица⦁⦁⦁⦶简传统日本人');
  test.isTrue(/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(res));
});

Tinytest.add('AESdecrypt() emoji / UTF8 - key', (test) => {
  test.equal(AESdecrypt(res, '🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица⦁⦁⦁⦶简传统日本人'), 'TXkgUGxhaW4gU3RyaW5n');
});

Tinytest.add('AESencrypt() emoji / UTF8 - key & value', (test) => {
  res = AESencrypt('🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица', '🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица');
  test.isTrue(/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(res));
});

Tinytest.add('AESdecrypt() emoji / UTF8 - key & value', (test) => {
  test.equal(AESdecrypt(res, '🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица'), '🔥👨‍💻🚀🏃‍♀️🏃‍♂️Кириллица');
});
