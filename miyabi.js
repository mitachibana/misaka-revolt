const { tokenWolf, tokenExchange } = require("./config.json");

async function miyabi() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=august+6+2025%20nagano&output=json&ip=138.199.21.39`
  );
  const hoshimi = await wolfData.json();
  return `
  ## Daily Miyabi Adoration Update
  > **Miyabi Banner End Date (6 August 2025):** ${hoshimi?.queryresult?.pods?.[3]?.subpods?.[2]?.plaintext}
  
  THE HOSHIMI MIYABI RERUN IS HERE AT LAST! MAY ALL MIYABI WANTERS BE MIYABI HAVERS. PRAISE BE!

  ***Your post must contain only the source and picture. No messages and no NSFW! Reactions OK!***

    Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to remind the monke he must post a picture, Misaka explains with futility.
    `;
}
module.exports.miyabi = miyabi;
