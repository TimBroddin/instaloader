const { IgApiClient } = require("instagram-private-api");

global._client = false;

export const getClient = async () => {
  if (!global._client) {
    try {
      console.log("create ig client");
      const ig = new IgApiClient();
      ig.state.generateDevice(process.env.IG_USERNAME + "2");
      //await ig.simulate.preLoginFlow();
      const loggedInUser = await ig.account.login(
        process.env.IG_USERNAME,
        process.env.IG_PASSWORD
      );
      console.log(loggedInUser);
      process.nextTick(async () => await ig.simulate.postLoginFlow());
      global._client = ig;
    } catch (e) {
      console.log(process.env.IG_USERNAME, process.env.IG_PASSWORD);
      console.log(e);
    }
  } else {
    console.log(global._client);
    console.log(`global ig client`);
  }

  return global._client;
};
