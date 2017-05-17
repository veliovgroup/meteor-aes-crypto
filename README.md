Isomorphic AES cipher
=====
Simplified isomorphic API for AES cipher by CryptoJS.

This implementation uses a random salt for every encrypted value and CFB padding. This means if you even encrypt two times same value with the same password the encrypted result will be both times different. So encrypted values by this method are strong against rainbow tables and all other precomputed tables.

Installation
=====
```shell
meteor add ostrio:aes-crypto
```

ES6 Import
=====
```jsx
import { AESencrypt, AESdecrypt } from 'meteor/ostrio:aes-crypto';
```

API
=====
##### `AESencrypt(plainString, password)`
```js
AESencrypt('My Plain String', 'TXkgUGxhaW4gU3RyaW5n');
// Returns: '{"ct":"ZQAp/MEV0pMDn6V7oY5YFVvEGNxvG2eJliNPZpT9U2I=","iv":"0e472d2cd20892ac9cfcf91dea4fe98e","s":"35e808ccc71b8c13"}'
```

##### `AESdecrypt(JSONableString, password)`
```js
AESdecrypt('{"ct":"ZQAp/MEV0pMDn6V7oY5YFVvEGNxvG2eJliNPZpT9U2I=","iv":"0e472d2cd20892ac9cfcf91dea4fe98e","s":"35e808ccc71b8c13"}', 'TXkgUGxhaW4gU3RyaW5n');
// Returns: 'My Plain String'
```

#### Validate encrypted JSONable String
To validate returned object from `AESencrypt` function use this regular expression:
```js
/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/
```

Example:
=====
```jsx
const JSONableString = AESencrypt('My Plain String', 'TXkgUGxhaW4gU3RyaW5n');
/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(JSONableString);
// Returns: true

AESdecrypt(JSONableString, 'TXkgUGxhaW4gU3RyaW5n');
// Returns: 'My Plain String'
```