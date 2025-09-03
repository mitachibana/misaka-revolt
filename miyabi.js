const { tokenWolf, tokenExchange } = require("./config.json");

async function miyabi() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=september+3+2025%20nagano&output=json&ip=138.199.21.39`
  );
  const hoshimi = await wolfData.json();
  return `
  ## Daily Alice Wipeouts!
  > **Last Alice Banner End Date (3 September 2025):** ${hoshimi?.queryresult?.pods?.[3]?.subpods?.[0]?.plaintext}
  
  Counting the days since Alice's debut and counting down the days until her rerun!
  
  Post wipeout pictures and other art of Alice!

  ***Your post must contain only the source and picture. No messages and no NSFW! Reactions OK!***

    Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to remind the monke he must post a picture, Misaka explains with futility.
    `;
}
module.exports.miyabi = miyabi;

