# Isomorphic AES cipher

Simplified isomorphic API for AES cipher by CryptoJS.

This implementation uses a random salt for every encrypted value and CFB padding. This means if you even encrypt two times the same value with the same password the encrypted result will be both times different. So encrypted values by this method are strong against rainbow tables and all other precomputed tables.

- 😎 No external dependencies;
- ㊗️ Has Unicode, Cyrillic, emoji support for values and keys;
- 👷‍♂️ __100%__ tests coverage.

## Installation

```shell
meteor add ostrio:aes-crypto
```

## ES6 Import

```js
import { AESencrypt, AESdecrypt } from 'meteor/ostrio:aes-crypto';
```

## API

### Encrypt

- `AESencrypt(value, password)`
  - `value` {*String*}
  - `password` {*String*}

```js
AESencrypt('My Plain String', 'TXkgUGxhaW4gU3RyaW5n');
// Returns: '{"ct":"ZQAp/MEV0pMDn6V7oY5YFVvEGNxvG2eJliNPZpT9U2I=","iv":"0e472d2cd20892ac9cfcf91dea4fe98e","s":"35e808ccc71b8c13"}'
```

### Decrypt

- `AESdecrypt(value, password)`
  - `value` {*String*} - In form of *JSONableString*
  - `password` {*String*}

```js
AESdecrypt('{"ct":"ZQAp/MEV0pMDn6V7oY5YFVvEGNxvG2eJliNPZpT9U2I=","iv":"0e472d2cd20892ac9cfcf91dea4fe98e","s":"35e808ccc71b8c13"}', 'TXkgUGxhaW4gU3RyaW5n');
// Returns: 'My Plain String'
```

### Validate encrypted JSONable String

To validate returned object from `AESencrypt` function use this regular expression:

```js
/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/;
```

## Example:

```js
const JSONableString = AESencrypt('My Plain String', 'TXkgUGxhaW4gU3RyaW5n');
/^{"ct":"([A-Za-z0-9+\/]+(\={0,2}))","iv":"([0-9a-f]{32})","s"\:"([0-9a-f]{16})"}$/.test(JSONableString);
// Returns: true

AESdecrypt(JSONableString, 'TXkgUGxhaW4gU3RyaW5n');
// Returns: 'My Plain String'
```
