import { JsonFormatter, CryptoJS } from './crypto-js.js';

const AESencrypt = function(string, _pass) {
  const iv = CryptoJS.enc.Hex.stringify(CryptoJS.lib.WordArray.random(16));
  const pass = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(_pass));
  const value = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(string));
  return CryptoJS.AES.encrypt(value, pass, {
    mode: CryptoJS.mode.CFB,
    format: JsonFormatter,
    iv: iv
  }).toString();
};

const AESdecrypt = function(crypted, _pass) {
  const pass = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(_pass));
  const decrypted = CryptoJS.AES.decrypt(crypted, pass, {
    mode: CryptoJS.mode.CFB,
    format: JsonFormatter
  });

  return CryptoJS.enc.Base64.parse(decrypted.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8);
};

export { AESencrypt, AESdecrypt, CryptoJS };
