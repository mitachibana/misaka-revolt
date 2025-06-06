const { tokenWolf, tokenExchange } = require("./config.json");

async function miyabi() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=21+january+2025%20nagano&output=json&ip=138.199.21.39`
  );
  const hoshimi = await wolfData.json();
  const wolfData2 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=4+july+2025%20nagano&output=json&ip=138.199.21.39`
  );
  const hoshimi2 = await wolfData2.json();
  return `
  ## Daily Miyabi Adoration Update
  > **Time Since Last Banner (21 January 2025):** ${hoshimi?.queryresult?.pods?.[3]?.subpods?.[2]?.plaintext}
  > **Time Until ZZZ 1st Anniversary (4 July 2025):** ${hoshimi2?.queryresult?.pods?.[3]?.subpods?.[2]?.plaintext} 
  
  Please post pictures of Miyabi! 

  ***Your post must contain only the source and picture. No messages and no NSFW! Reactions OK!***

    Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to remind the monke he must post a picture, Misaka explains with futility.
    `;
}
module.exports.miyabi = miyabi;
