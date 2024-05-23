# Twitter Follow Sync

A Node.js package to make one Twitter account follow the accounts followed by another Twitter account.

## Installation

```sh
npm install twitter-follow-sync
```

## Usage

```javascript
const { syncFollowers } = require("twitter-follow-sync");

syncFollowers({
  consumerKey: "your_consumer_key",
  consumerSecret: "your_consumer_secret",
  accessTokenA: "access_token_for_accountA",
  accessSecretA: "access_secret_for_accountA",
  accountA: "accountA_username",
  accessTokenB: "access_token_for_accountB",
  accessSecretB: "access_secret_for_accountB",
});
```
