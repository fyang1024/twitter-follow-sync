const { TwitterApi } = require('twitter-api-v2');

async function getFollowingList(client, username) {
  try {
    const following = await client.v2.following(username);
    return following.data;
  } catch (error) {
    console.error('Error fetching following list:', error);
  }
}

async function followAccounts(client, followingList) {
  for (const account of followingList) {
    try {
      await client.v2.follow(account.id);
      console.log(`Followed ${account.username}`);
    } catch (error) {
      console.error(`Error following ${account.username}:`, error);
    }
  }
}

async function syncFollowers({ 
  consumerKey, consumerSecret, 
  accessTokenA, accessSecretA, accountA, 
  accessTokenB, accessSecretB 
}) {
  const clientA = new TwitterApi({
    appKey: consumerKey,
    appSecret: consumerSecret,
    accessToken: accessTokenA,
    accessSecret: accessSecretA,
  });

  const clientB = new TwitterApi({
    appKey: consumerKey,
    appSecret: consumerSecret,
    accessToken: accessTokenB,
    accessSecret: accessSecretB,
  });

  // Get the list of accounts followed by accountA
  const followingList = await getFollowingList(clientA, accountA);

  // Make accountB follow the same list of accounts
  if (followingList && followingList.length > 0) {
    await followAccounts(clientB, followingList);
  } else {
    console.log('No accounts to follow.');
  }
}

module.exports = { syncFollowers };
