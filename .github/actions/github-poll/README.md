# GitHub Poll

An action to pull data from GitHub's GraphQL API and then stores the results in a Firebase Firestore database.

## Secrets

As we are querying the GraphQL API from GitHub, the default `GITHUB_TOKEN` secret is required.

As well, to access Firebase, a series of credentials are required. Using the `firebase-admin` npm package by default, these credentials are stored in a JSON file that is then loaded in, but as GitHub Actions can't store a JSON file of credentials privately, the following credentials are stored as secrets and then loaded into a JS object in the action. These match the fields as described in the [Add the Firebase Admin SDK to Your Server](https://firebase.google.com/docs/admin/setup) page in Firebase's docs. Follow the NodeJS options.

- `type`
- `project_id`
- `private_key_id`
- `client_email`
- `client_id`
- `auth_uri`
- `token_uri`
- `auth_provider_x509_cert_url`
- `client_x509_cert_url`
- `private_key`
