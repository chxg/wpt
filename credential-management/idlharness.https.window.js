// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

// https://w3c.github.io/webappsec-credential-management/

'use strict';

idl_test(
  ['credential-management'],
  ['html', 'dom'],
  idl_array => {
    idl_array.add_objects({
      CredentialsContainer: ['navigator.credentials'],
      PasswordCredential: [
        `new PasswordCredential({
          id: "id",
          password: "pencil",
          iconURL: "https://example.com/",
          name: "name"
        })`
      ],
      FederatedCredential: [
        `new FederatedCredential({
          id: "id",
          provider: "https://example.com",
          iconURL: "https://example.com/",
          name: "name"
        })`
      ]
    });
  }
)
